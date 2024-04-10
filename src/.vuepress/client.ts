
import { defineClientConfig } from "vuepress/client";
import BlowBox from "./components/BlowBox.vue";
import CarouselChart from "./components/CarouselChart.vue";
import ChangeTextSize from "./components/ChangeTextSize.vue";
import ChatWindow from "./components/ChatWindow.vue";
import Clock from "./components/Clock.vue";
import DicePractice from "./components/DicePractice.vue";
import ExpandBox from "./components/ExpandBox.vue";
import FirIm from "./components/FirIm.vue";
import From from "./components/From.vue";
import GuessingGame from "./components/GuessingGame.vue";
import HTMLBasic from "./components/HTMLBasic.vue";
import HolyGrailLayout from "./components/HolyGrailLayout.vue";
import ImageGradient from "./components/ImageGradient.vue";
import JDNav from "./components/JDNav.vue";
import PPT from "./components/PPT.vue";
import PanSwitchImage from "./components/PanSwitchImage.vue";
import PictureAlbum from "./components/PictureAlbum.vue";
import PictureGallery  from "./components/PictureGallery .vue";
import ResponsivePage from "./components/ResponsivePage.vue";
import ThreeDBox from "./components/ThreeDBox.vue";
import TiltNavigation from "./components/TiltNavigation.vue";
import Windmill from "./components/Windmill.vue";
import example from "./components/example.vue";
import toc from "./components/toc.vue";
import wechat from "./components/wechat.vue";

export default defineClientConfig({
  enhance: ({ app, router, siteData }) => {
    app.component("BlowBox", BlowBox);
app.component("CarouselChart", CarouselChart);
app.component("ChangeTextSize", ChangeTextSize);
app.component("ChatWindow", ChatWindow);
app.component("Clock", Clock);
app.component("DicePractice", DicePractice);
app.component("ExpandBox", ExpandBox);
app.component("FirIm", FirIm);
app.component("From", From);
app.component("GuessingGame", GuessingGame);
app.component("HTMLBasic", HTMLBasic);
app.component("HolyGrailLayout", HolyGrailLayout);
app.component("ImageGradient", ImageGradient);
app.component("JDNav", JDNav);
app.component("PPT", PPT);
app.component("PanSwitchImage", PanSwitchImage);
app.component("PictureAlbum", PictureAlbum);
app.component("PictureGallery ", PictureGallery );
app.component("ResponsivePage", ResponsivePage);
app.component("ThreeDBox", ThreeDBox);
app.component("TiltNavigation", TiltNavigation);
app.component("Windmill", Windmill);
app.component("example", example);
app.component("toc", toc);
app.component("wechat", wechat);
  },
});
