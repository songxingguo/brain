
<template>
  <div ref="el"></div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import useReact from "@hooks/useReact.js";
const el = ref();

onMounted(async () => {
  const { jsx } = await useReact("/demo/react/ReactDemo.jsx");

  new MiniSandbox({
    el: el.value,
    files: {
      "index.jsx": {
        defaultValue: jsx,
      },
    },
    loaders: {
      ".jsx": SandboxReactLoader,
    },
    publicConfig: {
      importMap: {
        imports: {
          react: "https://ga.jspm.io/npm:react@17.0.2/index.js",
          "react-dom": "https://ga.jspm.io/npm:react-dom@17.0.2/index.js",
        },
        scopes: {
          "https://ga.jspm.io/": {
            "object-assign":
              "https://ga.jspm.io/npm:object-assign@4.1.1/index.js",
            scheduler: "https://ga.jspm.io/npm:scheduler@0.20.2/index.js",
            "scheduler/tracing":
              "https://ga.jspm.io/npm:scheduler@0.20.2/tracing.js",
          },
        },
      },
    },
  });
});
</script>
