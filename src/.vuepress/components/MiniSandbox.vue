<template>
  <div class="box">
    <div  class="code" ref="editorRef"></div>
  </div>
</template>
<script lang="ts" setup>
import { onMounted, ref } from "vue";
import {basicSetup, EditorView} from "codemirror"
import { javascript } from "@codemirror/lang-javascript";
import { oneDark } from "@codemirror/theme-one-dark";
import {EditorState } from "@codemirror/state"

const editorRef = ref()
const code = ref(`console.log('Hello, world!');`);

onMounted(()=> {
  const state = EditorState.create({
      doc: code.value,
      extensions: [
        basicSetup,
        javascript(), // 在extensions中配置语言
        oneDark,
        EditorView.updateListener.of((v) => {
          console.log(v.state.doc.toString()) //监测得到的最新代码 
        }),
      ],
    });
    const editor = new EditorView({
      state,
      parent: editorRef.value,
    });
})
</script>
<style>
.box {
  width: 100%;
  height: 300px;
  border: 1px solid #f00;
}
.code {
  width: 300px;
  height: 300px;
}
</style>