<template>
  <div ref="el"></div>
</template>

<script setup>
import { ref, onMounted } from "vue";
const el = ref();

onMounted(() => {
  const html = `
<div id="container">
  <ul id="nav">
    <li><a href="#">首页</a></li>
    <li><a href="#">公司</a></li>
    <li><a href="#">联系</a></li>
    <li><a href="#">招聘</a></li>
  </ul>
</div>
   `;

  const css = `
* {
  padding: 0px;
  margin: 0px;
}
#container {
  width: 500px;
  margin: 20px auto;
}
#nav li {
  list-style: none;
  float: left;
  width: 100px;
  height: 40px;
  background-color: #FF5500;
  text-align: center;
  line-height: 40px;
  transform: skewX(-30deg);
  margin: 0 2px;
}
#nav li:hover{
  background-color: orange;
}
#nav a {
  display: inline-block;
    text-decoration: none;
    color: #FFFFFF;
    transform: skewX(30deg);
}
      `;

  new MiniSandbox({
    el: el.value,
    files: {
      "index.html": {
        defaultValue: html,
        cssLibs: ["index.css"],
      },
      "index.css": {
        defaultValue: css,
      },
    },
    defaultConfig: {
      height: "500px",
    },
  });
});
</script>