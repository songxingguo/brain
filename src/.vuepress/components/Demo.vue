<template>
  <div ref="el"></div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import MiniSandbox from "mini-sandbox";

const el = ref();

onMounted(() => {
  new MiniSandbox({
    el: el.value,
    files: {
      "index.html": {
        defaultValue: `<button onclick="alert('Hello')">按钮</button>`,
      },
    },
    defaultConfig: {
      height: "500px",
    },
  });
});
</script>