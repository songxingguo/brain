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
        <div ref="editorRef"></div>
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
<script lang="ts" setup>
import { onMounted, onBeforeMount,  ref } from "vue";
import {basicSetup, EditorView} from "codemirror"
import { javascript } from "@codemirror/lang-javascript";
import { oneDark } from "@codemirror/theme-one-dark";
import {EditorState } from "@codemirror/state"
import axios from "axios";

const editorRef = ref()
const title = ref()
let url = ref();

const getTitle = (data) => {
  const regTitle = /<title[\s\S]*>[\s\S]*<\/title>/;
  const titleStr = regTitle.exec(data);
  if (!titleStr) return;
  const title = titleStr[0]
    .replace("</title>", "")
    .replace(/<title[\s\S]*?>/, "");
  return title;
};

const handleCodeChanged = (data) => {
  const htmlFragment = [data];
  const myBlob = new Blob(htmlFragment, { type: "text/html" });
  url.value = URL.createObjectURL(myBlob);
}

const initEditor = (data) => {
    const state = EditorState.create({
      doc: data,
      extensions: [
        basicSetup,
        javascript(), // 在extensions中配置语言
        oneDark,
        EditorView.updateListener.of((v) => {
          const data = v.state.doc
          handleCodeChanged(data)
        }),
      ],
    });
    const editor = new EditorView({
      state,
      parent: editorRef.value,
    });
}

onBeforeMount(async () => {
  const { data } = await axios.get("/demo/HTMLBasic/EFileUpload.html");
  title.value = getTitle(data);
  initEditor(data)
  handleCodeChanged(data)
});
</script>
<style>
.sandbox-code {
  overflow: auto !important;
}
</style>