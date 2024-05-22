
<template>
  <codemirror v-model="code"
    placeholder="Code goes here..."
    :style="{ height: '400px' }"
    :autofocus="true"
    :indent-with-tab="true"
    :tab-size="2"
    :extensions="extensions"
    @ready="handleReady"
    @change="log('change', $event)"
    @focus="log('focus', $event)"
    @blur="log('blur', $event)" />
  <iframe style="width: 100%; height: 800px;"
    ref="iframeRef"
    src="/demo/HTMLBasic/EFileUpload.html"
    frameborder="0"></iframe>
</template>

<script>
import { defineComponent, ref, shallowRef, onMounted } from "vue";
import { Codemirror } from "vue-codemirror";
import { html } from "@codemirror/lang-html";
import { oneDark } from "@codemirror/theme-one-dark";
import axios from "axios";
const { data } = await axios.get("/demo/HTMLBasic/EFileUpload.html");

export default defineComponent({
  components: {
    Codemirror,
  },
  setup() {
    const code = ref(data);
    const extensions = [html(), oneDark];

    // Codemirror EditorView instance ref
    const view = shallowRef();
    const handleReady = (payload) => {
      view.value = payload.view;
    };

    const iframeRef = ref();
    onMounted(() => {
      console.log(
        "iframeRef.value.contentDocument.documentElement.innerHTML,",
        iframeRef.value.contentDocument.documentElement
      );
    });

    return {
      code,
      extensions,
      handleReady,
      iframeRef,
      log: console.log,
    };
  },
});
</script>import { onMounted } from "vue";
