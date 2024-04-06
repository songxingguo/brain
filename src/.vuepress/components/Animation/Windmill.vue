<template>
  <div ref="el"></div>
</template>

<script setup>
import { ref, onMounted } from "vue";
const el = ref();

onMounted(() => {
  const html = `
<div id="container">
    <div id="leaf-cont">
      <div class="leaf"></div>
      <div class="leaf"></div>
      <div class="leaf"></div>
      <div class="leaf"></div>
      <div class="core"></div>
    </div>
    <div id="pillar"></div>
</div>
   `;

  const css = `
#container {
  width: 400px;
  height: 600px;
  border: 1px solid red;
  margin: 20px auto;
        position: relative;
        overflow: hidden;
}
#pillar {
  position: absolute;
  width: 300px;
  height: 300px;
  background-color: darkslateblue;
  left: 50%;
  margin-left: -150px;
  bottom: -150px;
  transform: rotate(45deg) skew(40deg,40deg);				
}
#leaf-cont {
  width: 400px;
  height: 400px;
  margin-top: 20px;
  transition: all 1s; 
  position: relative;
  z-index: 2;
  
}
#container:hover #leaf-cont {
  transform: rotate(720deg);
}
.leaf {
  width: 0;
  height: 0;
  border-width: 30px 100px;
  border-style: solid;
  border-color: cornflowerblue transparent transparent cornflowerblue;
  position: absolute;
  left: 50%;
  top: 50%;
  transform-origin: left top;
}
.leaf:nth-child(2n) {
  border-color: deeppink transparent transparent deeppink; 
}
.leaf:nth-child(2) {
  transform: rotate(90deg);
}
.leaf:nth-child(3) {
  transform: rotate(180deg);
}
.leaf:nth-child(4) {
  transform: rotate(270deg);
}
.core {
  width: 0;
  height: 0;
  border-width: 10px 10px;
  border-style: solid;
  border-color: #CA365A #C0A4B5;
  border-radius: 50%;
  position: absolute;
  left: 50%;
  margin-left: -10px;
  top: 50%;
  margin-top: -10px;
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