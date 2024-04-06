<template>
  <div ref="el"></div>
</template>

<script>
export default {
  mounted() {
    const el = this.$refs.el;
    new MiniSandbox({
      el: el,
      files: {
        "index.html": {
          defaultValue: `<button onclick="alert('Hello')">按钮</button>`,
        },
      },
      defaultConfig: {
        height: "500px",
      },
    });
  },
};
</script>
