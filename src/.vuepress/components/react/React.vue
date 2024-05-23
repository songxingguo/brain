
<template>
  <codemirror v-model="code"
    placeholder="Code goes here..."
    :style="{ height: '400px' }"
    :autofocus="true"
    :indent-with-tab="true"
    :tab-size="2"
    :extensions="extensions"
    @ready="handleReady"
    @change="onFileChange($event)" />
  <iframe style="width: 100%; height: 400px;"
    :src="url"
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

    let url = ref("");
    const htmlFragment = [code.value];
    const myBlob = new Blob(htmlFragment, { type: "text/html" });
    url.value = URL.createObjectURL(myBlob);
    const onFileChange = (code) => {
      const htmlFragment = [code];
      const myBlob = new Blob(htmlFragment, { type: "text/html" });
      url.value = URL.createObjectURL(myBlob);
    };

    return {
      code,
      extensions,
      handleReady,
      onFileChange,
      url,
    };
  },
});
</script>import { onMounted } from "vue";
