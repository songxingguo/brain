#!/usr/bin/env node

import main from "./genDemo.js";

const params = process.argv.slice(2);
const name = params[0];
const dir = params[1];
if (!name || !dir) {
  console.log("请输入名称或路径");
} else {
  // main("WebRTC DEMO", "src/dv/audio-visual/WebRTC");
  main(name, dir);
}
