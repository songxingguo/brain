<template>
  <div class="box">
    <Codemirror
      class="code"
      v-model="code"
      :style="{ height: '100%' }"
      :extensions="extensions"
      :autofocus="true"
      :disabled="false"
      @ready="handleClick('ready', $event)"
      @change="handleClick('change', $event)"
      @focus="handleClick('focus', $event)"
      @blur="handleClick('blur', $event)"
    />
  </div>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import { Codemirror } from "vue-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { oneDark } from "@codemirror/theme-one-dark";
const code = ref(`console.log('Hello, world!');console.log('Hello, world!');`);
const extensions = [javascript(), oneDark];
const handleClick = (type: string, val: Event) => {
  console.log(type, val);
};
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