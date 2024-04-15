
<template>
  <div ref="el"></div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import useHtml from "@hooks/useHtml.js";

const el = ref();

onMounted(async () => {
  const { html, css, js } = await useHtml("/demo/WebRTC/Signal.html");

  new MiniSandbox({
    el: el.value,
    files: {
      "index.html": {
        defaultValue: html,
        
        jsLibs: ["index.js"],
      },
      
      "index.js": {
        defaultValue: js,
      },
    },
    defaultConfig: {
      height: "500px",
    },
  });
});
</script>
