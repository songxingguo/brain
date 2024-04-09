import axios from "axios";
const regCss = /<style>[\s\S]*<\/style>/;
const regScript = /<script>[\s\S]*<\/script>/;
const regHtml = /<body>[\s\S]*<\/body>/;

function resolveCss(htmlStr) {
  const css = regCss.exec(htmlStr);
  if (!css) return;
  const newCss = css[0].replace("<style>", "").replace("</style>", "");
  return newCss;
}

function resolveSrcipt(htmlStr) {
  const js = regScript.exec(htmlStr);
  if (!js) return;
  const newJs = js[0].replace("<script>", "").replace("</b>", "");
  return newJs;
}

function resolveHtml(htmlStr) {
  const html = regHtml.exec(htmlStr);
  if (!html) return;
  const newHtml = html[0].replace("<body>", "").replace("</body>", "");
  return newHtml;
}

export default async function (path) {
  const { data } = await axios.get(path);
  const css = resolveCss(data);
  const js = resolveSrcipt(data);
  const html = resolveHtml(data);
  return { html, css, js };
}
