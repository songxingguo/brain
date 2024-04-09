<template>
  <div ref="el"></div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import useHtml from "@hooks/useHtml.js";

const el = ref();

onMounted(async () => {
  const { html, css } = await useHtml("/demo/CSS3动画/3D盒子展开练习.html");

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