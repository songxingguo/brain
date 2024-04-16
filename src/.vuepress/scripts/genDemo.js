#!/usr/bin/env node

// 遍历目录
import fs from "fs";
import path from "path";
const DEMO_DIR = "src/.vuepress/public/demo";
const COMPONENTS_DIR = "src/.vuepress/components";

// 遍历目录
function listFile(dir) {
  let list = [];
  function _listFile(dir) {
    let arr = fs.readdirSync(dir);
    arr.forEach(function (item) {
      var fullpath = path.join(dir, item);
      var stats = fs.statSync(fullpath);
      if (stats.isDirectory()) {
        _listFile(fullpath);
      } else {
        if (isVue(fullpath) || isHtml(fullpath)) list.push(fullpath);
      }
    });
  }
  _listFile(dir);
  return list;
}

const _isCamelCase = (str) => {
  if (/[a-z]/.test(str[0])) {
    // 检查首字母是否为大写字母
    return false;
  }
  return true;
};

// 判断是否为Vue
const isVue = (filePath) => {
  const fileName = path.basename(filePath, ".vue");
  const isCamelCase = _isCamelCase(fileName);
  const isVue = path.extname(filePath) === ".vue";
  return isVue & isCamelCase;
};

// 判断是否为HTML
const isHtml = (filePath) => {
  const fileName = path.basename(filePath, ".html");
  const isCamelCase = _isCamelCase(fileName);
  const ishtml = path.extname(filePath) === ".html";
  return ishtml & isCamelCase;
};

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

function genDemo() {
  const files = listFile(DEMO_DIR);
  console.log("genDemo", files);
  files.forEach(async (url) => {
    let data = fs.readFileSync(url, "utf8");
    const hasJs = data.includes(`</script>`);
    const hasCss = data.includes(`</style>`);
    const newUrl = url.replace("src/.vuepress/public", "");
    const demo = _genDemo(newUrl, hasJs, hasCss);
    const fileName = url
      .replace(DEMO_DIR, COMPONENTS_DIR)
      .replace("html", "vue");
    const filePath = path.dirname(fileName);
    if (!fs.existsSync(filePath)) {
      fs.mkdirSync(filePath, { recursive: true });
    }
    // console.log("创建组件：", url, demo);
    fs.writeFileSync(fileName, demo);
  });
}

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

function regCom() {
  const files = listFile(COMPONENTS_DIR);
  let imports = [];
  let apps = [];
  files.forEach(async (url) => {
    console.log("注册组件：", url);
    const fileName = path.basename(url).replace(".vue", "");
    const importStr = `import ${fileName} from "${url.replace(
      "src/.vuepress/",
      "./"
    )}";`;
    const appStr = `app.component("${fileName}", ${fileName});`;
    imports.push(importStr);
    apps.push(appStr);
  });
  const data = _regCom(imports.join("\n"), apps.join("\n"));
  fs.writeFileSync(`src/.vuepress/client.ts`, data);
}

const _genMarkDown = (fileName, coms) => `---
title: ${fileName}
icon: post
order: 1
author: 宋玉
date: 2024-04-15
category:
  - 分类
tag:
  - 标签
---

${coms}
`;

const getTitle = (url) => {
  let data = fs.readFileSync(url, "utf8");
  const regTitle = /<title[\s\S]*>[\s\S]*<\/title>/;
  const titleStr = regTitle.exec(data);
  if (!titleStr) return;
  const title = titleStr[0]
    .replace("</title>", "")
    .replace(/<title[\s\S]*?>/, "");
  return title;
};

function genMarkDown(name, dir) {
  const files = listFile("src/.vuepress/public/demo/WebRTC");
  const comTemps = [];
  files.forEach((url) => {
    const comName = path.basename(url, ".html");
    const comPath = url.replace(DEMO_DIR, "");
    const comTitle = getTitle(url);
    const comTemp = `
### [${comTitle}](https://brain.songxingguo.com/demo/${comPath})
  
<${comName} />
`;
    comTemps.push(comTemp);
    console.log("添加组件", comName, comTitle);
  });

  const data = _genMarkDown(name, comTemps.join("\n"));
  const fileName = `${dir}/${name}.md`;
  fs.writeFileSync(fileName, data);
}

export default function main(name, dir) {
  genDemo();
  regCom();
  genMarkDown(name, dir);
}
