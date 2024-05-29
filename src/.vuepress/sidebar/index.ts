import { fe } from "./group/fe";
import { be } from "./group/be";
import { dv } from "./group/dv";
import { ai } from "./group/ai";
import { en } from "./group/en";
import { life } from "./group/life";

// @ts-ignore
import { sidebar } from "vuepress-theme-hope";

export const sideBar = sidebar({
  "/content/web/frontend/": fe,
  "/content/web/backend/": be,
  "/content/dv/": dv,
  "/content/ai/": ai,
  "/content/en/": en,
  "/content/life/": life,
});
