import axios from "axios";

export default async function (path) {
  const { data } = await axios.get(path);
  return { data };
}
