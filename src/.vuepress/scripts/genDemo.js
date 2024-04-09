// 遍历目录

import fs from "fs";
import path from "path";

// 遍历目录
function listFile(dir) {
  let list = [];
  let arr = fs.readdirSync(dir);
  arr.forEach(function (item) {
    var fullpath = path.join(dir, item);
    var stats = fs.statSync(fullpath);
    if (stats.isDirectory()) {
      listFile(fullpath);
    } else {
      list.push(fullpath);
    }
  });
  return list;
}

// 读取文件
// 创建Demo文件
const genDemo = (url, hasJs, hasCss) => `
<template>
  <div ref="el"></div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import useHtml from "@hooks/useHtml.js";

const el = ref();

onMounted(async () => {
  const { html, css, ${hasJs ? "js" : ""} } = await useHtml("${url}");

  new MiniSandbox({
    el: el.value,
    files: {
      "index.html": {
        defaultValue: html,
        ${hasCss ? `cssLibs: ["index.css"],` : ""}
        ${hasJs ? `jsLibs: ["index.js"],` : ""}
      },
      ${
        hasCss
          ? `"index.css": {
        defaultValue: css,
      },`
          : ""
      }
      ${
        hasJs
          ? `"index.js": {
        defaultValue: js,
      },`
          : ""
      }
    },
    defaultConfig: {
      height: "500px",
    },
  });
});
</script>
`;

// 添加组件配置
// 添加到md中

function main() {
  const files = listFile("../public/demo/CSS3动画");
  files.forEach(async (url) => {
    let data = fs.readFileSync(url, "utf8");
    const hasJs = data.includes(`</script>`);
    const hasCss = data.includes(`</style>`);
    url = url.replace("../public", "");
    const demo = genDemo(url, hasJs, hasCss);
    const fileName = path.basename(url);
    console.log(url, demo);
    const demoPath = `../components/${fileName}`.replace("html", "vue");
    fs.writeFileSync(demoPath, demo);
  });
}

main();
