<template>
  <div ref="el"></div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import MiniSandbox from "mini-sandbox";
import SandboxVueLoader from "mini-sandbox/dist/vue-loader";

const el = ref();

const html = `<template><div>
    <el-row>
      <el-button size="mini" type="primary">按钮一</el-button>
      <el-button size="mini" type="success">按钮二</el-button>
      <el-button size="mini" type="info">按钮三</el-button>
      <el-button size="mini" type="warning">按钮四</el-button>
      <el-button size="mini" type="danger">按钮五</el-button>
    </el-row>
    <el-row>
      <el-tag type="primary">标签一</el-tag>
      <el-tag type="success">标签二</el-tag>
      <el-tag type="info">标签三</el-tag>
      <el-tag type="warning">标签四</el-tag>
      <el-tag type="danger">标签五</el-tag>
    </el-row>
    <el-row>
      <el-alert title="成功提示的文案" type="success"></el-alert>
      <el-alert title="消息提示的文案" type="info"></el-alert>
      <el-alert title="警告提示的文案" type="warning"></el-alert>
      <el-alert title="错误提示的文案" type="error"></el-alert>
    </el-row>
    <el-row>
      <el-badge :value="12" class="item">
        <el-button size="small">评论</el-button>
      </el-badge>
      <el-badge :value="3" class="item">
        <el-button size="small">回复</el-button>
      </el-badge>
      <el-badge :value="1" class="item" type="primary">
        <el-button size="small">评论</el-button>
      </el-badge>
      <el-badge :value="2" class="item" type="warning">
        <el-button size="small">回复</el-button>
      </el-badge>
    </el-row>
  </div>
</template>

<script>
  export default {}
<\/script>

<style>
.el-row {
  margin: 15px 10px;
}
.el-row > *:not(button) {
  margin-right: 15px;
}
.el-alert {
  margin: 10px 0;
}
</style>`;

onMounted(() => {
  new MiniSandbox({
    el: el.value,
    files: {
      "App.vue": {
        defaultValue: html,
      },
    },
    loaders: {
      ".vue": SandboxVueLoader,
    },
    publicConfig: {
      cssLibs: ["https://unpkg.com/element-ui/lib/theme-chalk/index.css"],
      jsLibs: [
        "https://unpkg.com/vue@2.6.14",
        "https://unpkg.com/element-ui/lib/index.js",
      ],
    },
    defaultConfig: {
      height: "500px",
    },
  });
});
</script>