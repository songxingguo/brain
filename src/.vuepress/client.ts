
import { defineClientConfig } from "vuepress/client";
import BlowBox from "./components/CSSAnimation/BlowBox.vue";
import Clock from "./components/CSSAnimation/Clock.vue";
import ExpandBox from "./components/CSSAnimation/ExpandBox.vue";
import FirIm from "./components/CSSAnimation/FirIm.vue";
import ThreeDBox from "./components/CSSAnimation/ThreeDBox.vue";
import TiltNavigation from "./components/CSSAnimation/TiltNavigation.vue";
import Windmill from "./components/CSSAnimation/Windmill.vue";
import PictureAlbum from "./components/CSSBasic/PictureAlbum.vue";
import PictureGallery from "./components/CSSBasic/PictureGallery.vue";
import DicePractice from "./components/FlexLayout/DicePractice.vue";
import HolyGrailLayout from "./components/FlexLayout/HolyGrailLayout.vue";
import ResponsivePage from "./components/FlexLayout/ResponsivePage.vue";
import CarouselChart from "./components/HTMLBasic/CarouselChart.vue";
import ChangeTextSize from "./components/HTMLBasic/ChangeTextSize.vue";
import ChatWindow from "./components/HTMLBasic/ChatWindow.vue";
import From from "./components/HTMLBasic/From.vue";
import GuessingGame from "./components/HTMLBasic/GuessingGame.vue";
import HTMLBasic from "./components/HTMLBasic/HTMLBasic.vue";
import HTMLExample from "./components/HTMLBasic/HTMLExample.vue";
import ImageGradient from "./components/HTMLBasic/ImageGradient.vue";
import JDNav from "./components/HTMLBasic/JDNav.vue";
import PPT from "./components/HTMLBasic/PPT.vue";
import PanSwitchImage from "./components/HTMLBasic/PanSwitchImage.vue";
import MVP from "./components/Three/MVP.vue";
import Toc from "./components/Toc.vue";
import WeChat from "./components/WeChat.vue";
import Chat from "./components/WebRTC/Chat/Chat.vue";
import DesktopRecorder from "./components/WebRTC/DesktopRecorder.vue";
import GetDevices from "./components/WebRTC/GetDevices.vue";
import GetVideoAndAudio from "./components/WebRTC/GetVideoAndAudio.vue";
import Getstats from "./components/WebRTC/Getstats.vue";
import Peerconnection from "./components/WebRTC/Peerconnection.vue";
import Recorder from "./components/WebRTC/Recorder.vue";
import Signal from "./components/WebRTC/Signal.vue";
import Takephoto from "./components/WebRTC/Takephoto.vue";

export default defineClientConfig({
  enhance: ({ app, router, siteData }) => {
    app.component("BlowBox", BlowBox);
app.component("Clock", Clock);
app.component("ExpandBox", ExpandBox);
app.component("FirIm", FirIm);
app.component("ThreeDBox", ThreeDBox);
app.component("TiltNavigation", TiltNavigation);
app.component("Windmill", Windmill);
app.component("PictureAlbum", PictureAlbum);
app.component("PictureGallery", PictureGallery);
app.component("DicePractice", DicePractice);
app.component("HolyGrailLayout", HolyGrailLayout);
app.component("ResponsivePage", ResponsivePage);
app.component("CarouselChart", CarouselChart);
app.component("ChangeTextSize", ChangeTextSize);
app.component("ChatWindow", ChatWindow);
app.component("From", From);
app.component("GuessingGame", GuessingGame);
app.component("HTMLBasic", HTMLBasic);
app.component("HTMLExample", HTMLExample);
app.component("ImageGradient", ImageGradient);
app.component("JDNav", JDNav);
app.component("PPT", PPT);
app.component("PanSwitchImage", PanSwitchImage);
app.component("MVP", MVP);
app.component("Toc", Toc);
app.component("WeChat", WeChat);
app.component("Chat", Chat);
app.component("DesktopRecorder", DesktopRecorder);
app.component("GetDevices", GetDevices);
app.component("GetVideoAndAudio", GetVideoAndAudio);
app.component("Getstats", Getstats);
app.component("Peerconnection", Peerconnection);
app.component("Recorder", Recorder);
app.component("Signal", Signal);
app.component("Takephoto", Takephoto);
  },
});
