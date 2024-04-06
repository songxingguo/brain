// @ts-ignore
import { defineClientConfig } from "vuepress/client";

// @ts-ignore
import WeChat from "./components/wechat.vue";
// @ts-ignore
import toc from "./components/toc.vue";
import ThreeDBox from './components/Animation/ThreeDBox/index.vue'
import BlowBox from './components/Animation/BlowBox/index.vue'
import ExpandBox from './components/Animation/ExpandBox/index.vue'
import Windmill from './components/Animation/Windmill.vue'
import TiltNavigation from './components/Animation/TiltNavigation.vue'
import Clock from './components/Animation/Clock.vue'
import FirIm from './components/Animation/FirIm.vue'

export default defineClientConfig({
  enhance: ({ app, router, siteData }) => {
    app.component("WeChat", WeChat);
    app.component("TOC", toc);
    app.component('ThreeDBox', ThreeDBox)
    app.component('BlowBox', BlowBox)
    app.component('ExpandBox', ExpandBox)
    app.component('Windmill', Windmill)
    app.component('TiltNavigation', TiltNavigation)
    app.component('Clock', Clock)
    app.component('FirIm', FirIm)
  },
});
