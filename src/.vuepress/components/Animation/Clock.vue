<template>
  <div ref="el"></div>
</template>

<script setup>
import { ref, onMounted } from "vue";
const el = ref();

onMounted(() => {
  const html = `
<div  id="container">
  <ul id="scale-container">
  </ul>
  <div class="hour"></div>
  <div class="minute"></div>
  <div class="second"></div>
  <div class="dot"></div>
</div>
   `;

  const css = `
* {
  padding: 0;
  margin: 0;
}
li {
  list-style: none;
}
#container {
  width: 400px;
  height: 400px;
  border-radius: 50%;
  border: 20px solid #373F4A;
  background-color: #262C33;
  position: relative;
  margin: 20px auto;
}
      #container ul {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        position: relative;
      }
#container li {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #D4D5D6;
  position: absolute;
  top: 10px;
  left: 50%;
  margin-left: -5px;
  transform-origin: 5px 190px;
}
#container li:nth-child(5n+1) {
  height: 20px;
  border-radius: 5px;
}
#container li:nth-child(15n+1) {
  height: 30px;
  border-radius: 5px;
}
.hour {
  width: 14px;
  height: 105px;
  background-color: #FFFFFF;
  position: absolute;
  left: 50%;
  margin-left: -7px;
  top: 50%;
  transform-origin: center top;  
}
.hour:after {
  content: '';
  position: absolute;
  bottom: -7px;
  width: 14px;
  height: 14px;
  background-color: #FFFFFF;
  transform: rotate(45deg) skew(15deg,15deg);
}
.minute {
  width: 10px;
  height: 155px;
  background-color: #FFFFFF;
  position: absolute;
  left: 50%;
  margin-left: -5px;
  top: 50%;
  transform-origin: center top;  
}
.minute:after {
  content: '';
  position: absolute;
  bottom: -5px;
  width: 10px;
  height: 10px;
  background-color: #FFFFFF;
  transform: rotate(45deg) skew(15deg,15deg);
}
.second {
  width: 6px;
  height: 225px;
  background-color: #F16B41;
  border-radius: 3px;
  position: absolute;
  left: 50%;
  margin-left: -3px;
    top: 50%;
    margin-top: -50px;
    transform-origin: center 50px;  
}
.dot {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #F16B41;
  position: absolute;
  left: 50%;
  margin-left: -10px;
    top: 50%;
    margin-top: -10px;
}
      `;

  const js = `
window.onload = function() {
    var scaleCont = document.getElementById('scale-container');

    for (var i = 0; i < 60; i++) {
      scaleCont.innerHTML += '<li style="transform: rotate('+ i*6 +'deg);"></li>';
    }

    // 绘制时间
    function drawTime() {
      var myDate = new Date();
      var h = myDate.getHours();
      var m = myDate.getMinutes();
      var s = myDate.getSeconds();
      
      console.log(h,m,s);
      
      var hour = document.getElementsByClassName('hour')[0];
      var minute = document.getElementsByClassName('minute')[0];
      var second = document.getElementsByClassName('second')[0];
    //					var offset = ((m*6 + 180)/120); //时针偏移量
      var offset = ((m*6)/360) * 30; //时针偏移量
      
      hour.style.transform = 'rotate('+  (h*30 + 180 + offset) +'deg)';
      minute.style.transform = 'rotate('+  (m*6 + 180) +'deg)';
      second.style.transform = 'rotate('+  (s*6 + 180) +'deg)';
    }

    drawTime();

    setInterval(function() {
      drawTime();
    }, 1000);
}
  `;

  new MiniSandbox({
    el: el.value,
    files: {
      "index.html": {
        defaultValue: html,
        cssLibs: ["index.css"],
        jsLibs: ["index.js"],
      },
      "index.css": {
        defaultValue: css,
      },
      "index.js": {
        defaultValue: js,
      },
    },
    defaultConfig: {
      height: "500px",
    },
  });
});
</script>