import axios from "axios";

export default async function (path) {
  const { data: jsx } = await axios.get(path);
  return { jsx };
}
