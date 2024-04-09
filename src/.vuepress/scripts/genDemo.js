// 遍历目录

import fs from "fs";
import path from "path";
const DEMO_DIR = "../public/demo/CSSAnimation";
const COMPONENTS_DIR = "../components";

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

// 创建Demo文件
const _genDemo = (url, hasJs, hasCss) => `
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
const _regCom = (imports, apps) => `
import { defineClientConfig } from "vuepress/client";
${imports}

export default defineClientConfig({
  enhance: ({ app, router, siteData }) => {
    ${apps}
  },
});
`;

function genDemo() {
  const files = listFile(DEMO_DIR);
  files.forEach(async (url) => {
    let data = fs.readFileSync(url, "utf8");
    const hasJs = data.includes(`</script>`);
    const hasCss = data.includes(`</style>`);
    url = url.replace("../public", "");
    const demo = _genDemo(url, hasJs, hasCss);
    const fileName = path.basename(url);
    console.log(url, demo);
    const demoPath = `../components/${fileName}`.replace("html", "vue");
    fs.writeFileSync(demoPath, demo);
  });
}

function regCom() {
  const files = listFile(COMPONENTS_DIR);
  let imports = [];
  let apps = [];
  files.forEach(async (url) => {
    console.log(url);
    const fileName = path.basename(url).replace(".vue", "");
    const importStr = `import ${fileName} from "${url.replace("../", "./")}";`;
    const appStr = `app.component("${fileName}", ${fileName});`;
    imports.push(importStr);
    apps.push(appStr);
  });
  const data = _regCom(imports.join("\n"), apps.join("\n"));
  fs.writeFileSync(`../client.ts`, data);
}

function main() {
  genDemo();
  regCom();
}

main();
