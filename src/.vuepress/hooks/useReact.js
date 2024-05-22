import axios from "axios";
const regScript = /<script type="text\/babel">[\s\S]*?<\/script>/;

function resolveSrcipt(htmlStr) {
  const js = regScript.exec(htmlStr);
  if (!js) return;
  const newJs = js[0]
    .replace(/<script type="text\/babel">/, "")
    .replace("</script>", "");

  return newJs;
}

export default async function (path) {
  const { data } = await axios.get(path);
  const jsx = resolveSrcipt(data);
  return { jsx };
}
