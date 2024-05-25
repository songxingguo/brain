<template>
  <div class="html-editor" style="height: 80vh">
    <div class="editor-head">
      <div class="editor-tab">
        <div class="editor-tab-item editor-tab-active" data-index="1">
          <span>{{ title }}</span>
        </div>
      </div>
    </div>
    <div class="editor-body" style="flex-direction: row">
      <div class="editor-code">
        <div ref="editorRef"></div>
      </div>
      <div class="editor-gutter" style="width: 5px; height: 100%"></div>
      <div class="editor-render">
        <iframe
          style="width: auto; height: 100%"
          :src="url"
          frameborder="0"
        ></iframe>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { onBeforeMount, ref } from "vue";
import { basicSetup, EditorView } from "codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { oneDark } from "@codemirror/theme-one-dark";
import { EditorState } from "@codemirror/state";
import axios from "axios";

const props = defineProps({
  src: { type: String, required: true },
});

const editorRef = ref();
const title = ref();
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
};

const initEditor = (data) => {
  const state = EditorState.create({
    doc: data,
    extensions: [
      basicSetup,
      javascript(), // 在extensions中配置语言
      oneDark,
      EditorView.updateListener.of((v) => {
        const data = v.state.doc;
        handleCodeChanged(data);
      }),
    ],
  });
  const editor = new EditorView({
    state,
    parent: editorRef.value,
  });
};

onBeforeMount(async () => {
  const { data } = await axios.get(props.src);
  title.value = getTitle(data);
  initEditor(data);
  handleCodeChanged(data);
});
</script>
<style lang="less">
.html-editor {
  // --white: #ececfe;
  // --greyLight-2: #dbe1f3;

  --white: #eee;
  --greyLight-1: #e4ebf5;
  --greyLight-2: #c8d0e7;
  --greyLight-3: #bec8e4;
  --greyDark: #9baacf;
  @shadow: 0.3rem 0.3rem 0.6rem var(--greyLight-2),
    -0.2rem -0.2rem 0.5rem var(--white);
  @inner-shadow: inset 0.2rem 0.2rem 0.5rem var(--greyLight-2),
    inset -0.2rem -0.2rem 0.5rem var(--white);
  @hd-height: 36px;
  background-color: #fff;
  overflow: hidden;
  box-shadow: @shadow;
  .editor-head {
    display: flex;
    align-items: center;
    height: @hd-height;
    font-size: 14px;
    background: var(--bgColor);
    user-select: none;
    overflow: hidden;
    padding: 0 8px;
    .editor-icon {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 3px 4px;
      margin: 0 4px;
      cursor: pointer;
      border-radius: 5px;
      & > svg {
        color: #9baacf;
        width: 20px;
        height: 20px;
      }
      &.icon-active:hover {
        box-shadow: @shadow;
      }
      &.icon-active:active {
        box-shadow: @inner-shadow;
      }
    }
    .editor-setting {
      margin-left: -3px;
      line-height: @hd-height;
      text-align: center;
      font-size: 20px;
      color: var(--fontColor);
      cursor: pointer;
      font-weight: 300;
    }
    .editor-tab {
      height: 100%;
      flex: 1;
      padding: 0 20px 0 0px;
      display: flex;
      align-items: flex-end;
      .editor-tab-item {
        height: 82%;
        display: flex;
        align-items: center;
        padding: 0px 15px;
        font-size: 13px;
        cursor: pointer;
        .editor-icon {
          float: right;
          width: 12px;
          height: 12px;
          margin-right: -8px;
        }
      }
      .editor-tab-active {
        position: relative;
        background: #ffffff;
        border-radius: 6px 6px 0 0;
        box-shadow: @shadow;
        &::before {
          content: "";
          display: block;
          position: absolute;
          width: 6px;
          height: 6px;
          left: -6px;
          bottom: 0;
          background: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M0 100c55.228 0 100-44.772 100-100v100H0z' fill='%23FFFFFF'/%3E%3C/svg%3E");
          background-size: 6px 6px;
          // box-shadow: @shadow;
        }
        &::after {
          content: "";
          display: block;
          position: absolute;
          width: 6px;
          height: 6px;
          right: -6px;
          bottom: 0;
          background: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M100 100C44.772 100 0 55.228 0 0v100h100z' fill='%23FFFFFF'/%3E%3C/svg%3E");
          background-size: 6px 6px;
          // box-shadow: @shadow;
        }
      }
    }
  }
  .editor-body {
    display: flex;
    height: calc(100% - @hd-height);
  }
  iframe,
  .cm-editor {
    width: 100%;
    height: 100%;
    outline: none !important;
    overflow: auto;
  }
  .editor-code {
    width: 50%;
    max-width: 100vw;
    height: 100%;
    overflow: auto;
    position: relative;
  }
  .editor-gutter {
    width: 5px;
    border-left: 1px solid var(--bgColor);
    border-right: 1px solid var(--bgColor);
    background-color: #f7f8fa;
    cursor: col-resize;
    box-sizing: border-box;
    &:active,
    &:hover {
      background-color: var(--bgColor);
    }
    &.no-dragging {
      cursor: auto;
      &:active,
      &:hover {
        background-color: #f7f8fa;
      }
    }
  }
  .editor-render {
    position: relative;
    overflow: hidden;
    height: 100%;
    flex: 1;
    position: relative;
    box-sizing: border-box;
    & > iframe {
      margin: 0;
      border: 0 none;
    }
    .editor-loading {
      position: absolute;
      left: 0;
      top: @hd-height;
      right: 0;
      bottom: 0;
      background-color: rgba(255, 255, 255, 0.9);
      display: none;
      &::before {
        content: "loading...";
        display: block;
        margin: auto;
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        width: 20px;
        height: 20px;
        color: var(--fontColor);
      }
    }
  }
  .editor-mask {
    cursor: col-resize;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    display: none;
    background-color: rgba(0, 0, 0, 0);
  }
  .cm-gutters {
    background-color: var(--bgColor);
    border: 0 none;
  }
}
</style>
