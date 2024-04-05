// @ts-ignore
import { defineClientConfig } from "vuepress/client";

// @ts-ignore
import WeChat from "./components/wechat.vue";
// @ts-ignore
import toc from "./components/toc.vue";
import Demo from './components/Demo.vue'

export default defineClientConfig({
  enhance: ({ app, router, siteData }) => {
    app.component("WeChat", WeChat);
    app.component("TOC", toc);
    app.component('Demo', Demo)
  },
});
