
import { defineClientConfig } from "vuepress/client";
import BlowBox from "./components/BlowBox.vue";
import Clock from "./components/Clock.vue";
import ExpandBox from "./components/ExpandBox.vue";
import FirIm from "./components/FirIm.vue";
import ThreeDBox from "./components/ThreeDBox.vue";
import TiltNavigation from "./components/TiltNavigation.vue";
import Windmill from "./components/Windmill.vue";
import toc from "./components/toc.vue";
import wechat from "./components/wechat.vue";

export default defineClientConfig({
  enhance: ({ app, router, siteData }) => {
    app.component("BlowBox", BlowBox);
app.component("Clock", Clock);
app.component("ExpandBox", ExpandBox);
app.component("FirIm", FirIm);
app.component("ThreeDBox", ThreeDBox);
app.component("TiltNavigation", TiltNavigation);
app.component("Windmill", Windmill);
app.component("toc", toc);
app.component("wechat", wechat);
  },
});
