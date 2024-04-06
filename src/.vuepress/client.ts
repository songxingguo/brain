// @ts-ignore
import { defineClientConfig } from "vuepress/client";

// @ts-ignore
import WeChat from "./components/wechat.vue";
// @ts-ignore
import toc from "./components/toc.vue";
import ThreeDBox from './components/Animation/ThreeDBox/index.vue'

export default defineClientConfig({
  enhance: ({ app, router, siteData }) => {
    app.component("WeChat", WeChat);
    app.component("TOC", toc);
    app.component('ThreeDBox', ThreeDBox)
  },
});
