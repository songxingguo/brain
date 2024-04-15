#!/usr/bin/env node

import { genMarkDown } from "./genDemo.js";

const params = process.stdin;
const name = params[0];
const dir = params[1];
if (!name || !dir) {
  return "请输入名称或路径";
}

genMarkDown(name, dir);

// genMarkDown("WebRTC DEMO", "src/dv/audio-visual/WebRTC");
