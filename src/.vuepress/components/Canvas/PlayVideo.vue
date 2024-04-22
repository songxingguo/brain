
<template>
  <div ref="el"></div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import useHtml from "@hooks/useHtml.js";

const el = ref();

onMounted(async () => {
  const { html, css,  } = await useHtml("/demo/Canvas/PlayVideo.html");

  new MiniSandbox({
    el: el.value,
    files: {
      "index.html": {
        defaultValue: html,
        
        
      },
      
      
    },
    defaultConfig: {
      height: "500px",
    },
  });
});
</script>
