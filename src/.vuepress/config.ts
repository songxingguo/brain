import theme from "./theme.js";
import { defineUserConfig } from "vuepress";
// @ts-ignore
import { getDirname, path } from "vuepress/utils";
// @ts-ignore
import { searchProPlugin } from "vuepress-plugin-search-pro";

const __dirname = getDirname(import.meta.url);

export default defineUserConfig({
  // 基础路径
  base: "/",
  //头部引入，这里引入的是 51la 统计
  head: [
    ["script", { type: "text/javascript", src: "/assets/js/51la.js" }],
    ["script", { type: "text/javascript", src: "https://unpkg.com/mini-sandbox@0.3.18" }],
    ["script", { type: "text/javascript", src: "https://unpkg.com/mini-sandbox@0.3.18/dist/vue-loader.js" }],
    ["script", { type: "text/javascript", src: "https://unpkg.com/mini-sandbox@0.3.18/dist/react-loader.js" }],
    ["script", { 
        "data-host-id":"1",
        "data-auto-reg":"true" ,
        "data-login-token":"" ,
        "data-theme-color":"#1fe1f9" ,
        "data-close-width":"48" ,
        "data-close-height":"48" ,
        "data-open-width":"380" ,
        "data-open-height":"680" ,
        "data-welcome":"你好，很高兴认识你，欢迎👏留您的想法或建议" ,
        src:"https://vocechat.songxingguo.com/widget.js" ,
        async: true,
    }],
  ],
  // 网站信息
  locales: {
    "/": {
      lang: "zh-CN",
      title: "宋玉的世界",
      description: "热爱可抵漫长岁月！",
    },
  },
  // 主题配置
  theme,
  // 根据别名添加功能
  alias: {
    "@theme-hope/modules/info/components/TOC": path.resolve(
      __dirname,
      "./components/Toc.vue"
    ),
    "@hooks": path.resolve(
      __dirname,
      "./hooks"
    ),
  },
  // 插件配置
  plugins: [
    searchProPlugin({
      // 索引全部内容
      indexContent: true,
    }),
  ],
  // Enable it with pwa
  shouldPrefetch: false,
});
