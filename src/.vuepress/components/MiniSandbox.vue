
<template>
  <div class="mini-sandbox"
    style="height: 80vh;">
    <div class="sandbox-head">
      <div class="sandbox-tab">
        <div class="sandbox-tab-item sandbox-tab-active"
          data-index="1">
          <span>{{ title }}</span>
        </div>
      </div>
    </div>
    <div class="sandbox-body"
      style="flex-direction: row;">
      <div class="sandbox-code">
        <codemirror v-model="code"
          placeholder="Code goes here..."
          :style="{ height: '400px' }"
          :autofocus="true"
          :indent-with-tab="true"
          :tab-size="2"
          :extensions="extensions"
          @ready="handleReady"
          @change="onFileChange($event)" />
      </div>
      <div class="sandbox-gutter"
        style="width: 5px; height: 100%;"></div>
      <div class="sandbox-render">
        <iframe style="width: auto; height: 100%;"
          :src="url"
          frameborder="0"></iframe>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, shallowRef, onBeforeMount } from "vue";
import { Codemirror } from "vue-codemirror";
import { html } from "@codemirror/lang-html";
import { oneDark } from "@codemirror/theme-one-dark";
import axios from "axios";

const getTitle = (data) => {
      const regTitle = /<title[\s\S]*>[\s\S]*<\/title>/;
      const titleStr = regTitle.exec(data);
      if (!titleStr) return;
      const title = titleStr[0]
        .replace("</title>", "")
        .replace(/<title[\s\S]*?>/, "");
      return title;
    };

export default defineComponent({
  components: {
    Codemirror,
  },
  setup() {
    const code = ref();
    const title = ref()
    onBeforeMount(async () => {
      const { data } = await axios.get("/demo/HTMLBasic/EFileUpload.html");
      code.value = data;
      title.value = getTitle(data);
    });

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
    const onFileChange = (newCode) => {
      const htmlFragment = [newCode];
      const myBlob = new Blob(htmlFragment, { type: "text/html" });
      url.value = URL.createObjectURL(myBlob);
    };

    return {
      code,
      extensions,
      handleReady,
      onFileChange,
      url,
      title,
    };
  },
});
</script>
