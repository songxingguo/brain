---
title: 快速上手DEMO
icon: post
order: 1
author: 宋玉
date: 2024-04-13
category:
  - 数据可视化
tag:
  - DEMO
---

### 初始化场景

首先是分别创建场景、相机和渲染器，三者缺一不可，并将渲染器渲染的结果挂载到 DOM 元素上。最后将在`render`函数绑定到`requestAnimationFrame`上, 并执行渲染函数，每次重绘都会重新执行`render`函数。

- 场景（scene）：场景一个物体的容器【通俗理解装东西的嘛】，开发者可以将需要的角色放入场景中,例如苹果，葡萄。同时， 角色自身也管理着其在场景中的位置。
- 相机（camera）：相机的作用就是面对场景,在场景中取一个合适的景，把它拍下来。【可以想象成人的眼睛】
- 渲染器（renderer）：渲染器的作用就是将相机拍摄下来的图片,放到浏览器中去显示。

```javascript
// 创建场景
const scene = new THREE.Scene();
// 创建相机
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

// 创建渲染器
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById("root").appendChild(renderer.domElement);

// 渲染
function render() {
  requestAnimationFrame(render);
  renderer.render(scene, camera);
}
render();
```

### 创建[几何体](https://threejs.org/docs/?q=ge#api/zh/geometries/BoxGeometry)

上面的场景都搭建好了，现在创建一个正方体，并将它加入到场景中。

```javascript
// 创建几何体
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0x00ffff });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);
```

### 添加辅助功能

也可以为场景中添加辅助坐标和辅助相机，能让我们更清楚的观察到当前元素在坐标系中所处的位置和大小。

```javascript
// 创建辅助坐标轴
const axes = new THREE.AxesHelper(1000);
scene.add(axes);

// 创建辅助相机
const helper = new THREE.CameraHelper(camera);
scene.add(helper);
```

### 模型控制

场景中拥有了正方体，但我能并不能和它进行交互，因此需要 `OrbitControls` 来对场景中的内容能控制。需要注意的是 `OrbitControls` 是一个控制插件，并没有在 Three.js 的核心模块中，而是在`examples/jsm/controls/` 文件夹中，我们这里为了方便使用采用的是 CDN 的方式进行引入。

```javascript
import { OrbitControls } from "https://cdn.skypack.dev/three@0.132.2/examples/jsm/controls/OrbitControls.js";
// 模型控制
const controls = new OrbitControls(camera, renderer.domElement);
```

### [MVP](https://brain.songxingguo.com/demo/Three/MVP.html)

下面是通过上述步骤搭建的一个最新可行性 DEMO，你可以通过注释代码方式来动态观察每个部分不同的作用。

<MVP />
```
