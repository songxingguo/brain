import { navBar } from "./navbar/index.js";
import { sideBar } from "./sidebar/index.js";
import { hopeTheme } from "vuepress-theme-hope";

export default hopeTheme(
  {
    docsDir: "/src",
    repo: "songxingguo/Brain",
    logo: "/avatar.png",
    hostname: "https://brain.songxingguo.com",

    iconAssets: ["//at.alicdn.com/t/c/font_4184658_d8uj8sy867l.css"],

    navbar: navBar,
    sidebar: sideBar,
    footer: "GPL Licensed | © songxingguo",
    displayFooter: false,
    blog: {
      description: "路虽远行则将至，事虽难做则必成！",
      intro: "https://resume.songxingguo.com",
      timeline: "好好学习，天天向上",
    },
    metaLocales: {
      editLink: "编辑此页",
    },

    navbarLayout: {
      start: ["Brand"],
      center: ["Links"],
      end: ["WeChat", "Outlook", "Repo", "Search"],
    },

    plugins: {
      blog: true,

      feed: {
        rss: true,
      },

      comment: {
        provider: "Giscus",
        repo:'songxingguo/brain',
        repoId:'MDEwOlJlcG9zaXRvcnkxNDgxMTkxMjA=',
        category:'General',
        categoryId:'DIC_kwDOCNQeUM4Ce0J8',
        mapping:'title',
        strict:true,
        reactionsEnabled:true,
        inputPosition:'bottom',
      },

      mdEnhance: {
        tabs: true,
        codetabs: true,
        chart: true,
        echarts: true,
        mermaid: true,
        katex: true,
        vuePlayground: true,
        sub: true,
        sup: true,
        demo: true,
        tasklist: true,
        // card: true,
        figure: true,
        imgLazyload: true,
        imgMark: true,
        imgSize: true,
        include: true,
        attrs: true,
        mark: true,
        markmap: true,
        footnote: true,
        align: true,
      },

      components: {
        components: [
          "AudioPlayer",
          "Badge",
          "BiliBili",
          "CodePen",
          "PDF",
          "Replit",
          "StackBlitz",
          "VideoPlayer",
          "YouTube",
        ],
      },
    },
  },
  { custom: true }
);
