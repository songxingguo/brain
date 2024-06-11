import * as http from "http"; //ES 6
import path from "path";
import fse from "fs-extra";
import multiparty from "multiparty";

const server = http.createServer();
const extractExt = (filename) =>
  filename.slice(filename.lastIndexOf("."), filename.length); // 提取后缀名
const UPLOAD_DIR = path.resolve("/Users/sxg/Downloads/", "target"); // 大文件存储目录

const resolvePost = (req) =>
  new Promise((resolve) => {
    let chunk = "";
    req.on("data", (data) => {
      chunk += data;
    });
    req.on("end", () => {
      resolve(JSON.parse(chunk));
    });
  });

const pipeStream = (path, writeStream) =>
  new Promise((resolve) => {
    const readStream = fse.createReadStream(path);
    readStream.on("end", () => {
      fse.unlinkSync(path); // 移除
      resolve();
    });
    readStream.pipe(writeStream);
  });

const mergeFileChunk = async (filePath, fileHash, size = 5 * 1024 * 1024) => {
  // console.log(filePath, filename, size)
  // 大文件上传时，设计后端思想时每个要上传的文件，先以文件名，
  // 为target目录名，把分文件blob，放入这个目录
  // 文件blob上传前要加上index
  // node 文件合并肯定可以的，stream
  const chunkDir = path.resolve(UPLOAD_DIR, fileHash);
  // console.log(chunkDir);
  const chunkPaths = await fse.readdir(chunkDir);
  // console.log(chunkPaths); // 路径下的数组文件名
  chunkPaths.sort((a, b) => a.split("-")[1] - b.split("-")[1]);
  // console.log(chunkPaths, '++');
  // 每块内容写入最后的文件，promise
  await Promise.all(
    chunkPaths.map((chunkPath, index) =>
      pipeStream(
        // 回流的方法
        path.resolve(chunkDir, chunkPath),
        fse.createWriteStream(filePath, {
          start: index * size,
          end: (index + 1) * size,
        })
      )
    )
  );
  console.log("文件合并成功");
  fse.rmdirSync(chunkDir); // 删除
};

// 合并切片
// const mergeFileChunk = async (filePath, fileHash) => {
//   const chunkDir = `${UPLOAD_DIR}/${fileHash}`;
//   const chunkPaths = await fse.readdir(chunkDir);
//   // 根据切片下标进行排序，否则直接读取目录的获得的顺序可能会错乱
//   chunkPaths.sort((a, b) => a.split("-")[1] - b.split("-")[1]);
//   await fse.writeFile(filePath, "");
//   chunkPaths.forEach((chunkPath) => {
//     console.log("chunkPath", chunkPath);
//     fse.appendFileSync(filePath, fse.readFileSync(`${chunkDir}/${chunkPath}`));
//     fse.unlinkSync(`${chunkDir}/${chunkPath}`);
//   });
//   fse.rmdirSync(chunkDir); // 合并后删除保存切片的目录
// };

// 返回已经上传切片名列表
const createUploadedList = async (fileHash) =>
  fse.existsSync(`${UPLOAD_DIR}/${fileHash}`)
    ? await fse.readdir(`${UPLOAD_DIR}/${fileHash}`)
    : [];

server.on("request", async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "*");
  if (req.method === "OPTIONS") {
    res.status = 200;
    res.end();
    return;
  }

  if (req.url === "/") {
    const multipart = new multiparty.Form();

    multipart.parse(req, async (err, fields, files) => {
      if (err) {
        return;
      }
      const [chunk] = files.file;
      const [hash] = fields.hash;
      const [fileHash] = fields.fileHash;
      const chunkDir = `${UPLOAD_DIR}/${fileHash}`;

      // 切片目录不存在，创建切片目录
      if (!fse.existsSync(chunkDir)) {
        await fse.mkdirs(chunkDir);
      }

      // fs-extra 专用方法，类似 fs.rename 并且跨平台
      // fs-extra 的 rename 方法 windows 平台会有权限问题
      // https://github.com/meteor/meteor/issues/7852#issuecomment-255767835
      await fse.move(chunk.path, `${chunkDir}/${hash}`);
      res.status = 200;
      res.end(
        JSON.stringify({
          code: 200,
          message: "received file chunk",
        })
      );
    });
  }

  if (req.url === "/merge") {
    const data = await resolvePost(req);
    const { filename, fileHash } = data;
    const ext = extractExt(filename);
    const filePath = `${UPLOAD_DIR}/${fileHash}${ext}`;
    await mergeFileChunk(filePath, fileHash);
    res.end(
      JSON.stringify({
        code: 200,
        message: "file merged success",
      })
    );
  }

  if (req.url === "/verify") {
    const data = await resolvePost(req);
    const { fileHash, filename } = data;
    const ext = extractExt(filename);
    const filePath = `${UPLOAD_DIR}/${fileHash}${ext}`;
    if (fse.existsSync(filePath)) {
      res.end(
        JSON.stringify({
          shouldUpload: false,
        })
      );
    } else {
      res.end(
        JSON.stringify({
          shouldUpload: true,
          uploadedList: await createUploadedList(fileHash),
        })
      );
    }
  }
});

server.listen(3000, () => console.log("正在监听 3000 端口"));
