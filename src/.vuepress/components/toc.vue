<template>
  <TOC>
    <template #after>
      <a href="https://raw.githubusercontent.com/songxingguo/brain/87d787e5797e86e01a35fe5d9d927eb0cd241c7e/src/.vuepress/public/assets/images/songyu_green.png">
        <div id="flip-wrapper">
          <div id="flip-content">
            <div class="face"></div>
            <div class="back face"></div>
          </div>
        </div>
      </a>
    </template>
  </TOC>
</template>

<script setup>
import TOC from "vuepress-theme-hope/modules/info/components/TOC.js";
</script>

<style lang="scss" scoped>
#flip-wrapper {
  position: relative;
  width: 225px;
  height: 64px;
  z-index: 1;
  margin-top: 30px;
}

#flip-wrapper {
  -webkit-perspective: 1000;
  perspective: 1000;
}

#flip-content {
  width: 100%;
  height: 120%;
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
  transition: cubic-bezier(0, 0, 0, 1.29) 0.5s;
}

#flip-wrapper:hover #flip-content {
  -webkit-transform: rotateY(180deg);
  transform: rotateY(180deg);
}

.face {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  background: url(https://raw.githubusercontent.com/songxingguo/brain/87d787e5797e86e01a35fe5d9d927eb0cd241c7e/src/.vuepress/public/assets/images/songyu_green.png)
    center center no-repeat;
  background-size: 100%;
  border-radius: 6px;
}

.back.face {
  display: block;
  -webkit-transform: rotateY(180deg);
  transform: rotateY(180deg);
  box-sizing: border-box;
  background: url(https://raw.githubusercontent.com/songxingguo/brain/87d787e5797e86e01a35fe5d9d927eb0cd241c7e/src/.vuepress/public/assets/images/songyu_white.png)
    center center no-repeat;
  background-size: 100%;
}
</style>
