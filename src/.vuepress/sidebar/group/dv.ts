// @ts-ignore
import { arraySidebar } from "vuepress-theme-hope";

export const dv = arraySidebar([
  {
    text: "Foreword",
    icon: "hi",
    prefix: "foreword/",
    children: "structure",
    collapsible: true,
  },
  {
    text: "Basic",
    icon: "jichu",
    prefix: "basic/",
    children: [
      {
        text: "前言",
        icon: "zhinanzhen",
        prefix: "foreword/",
        children: "structure",
        collapsible: true,
      },
      {
        text: "图形基础",
        icon: "web",
        prefix: "graphics_basics/",
        children: "structure",
        collapsible: true,
      },
      {
        text: "数学基础",
        icon: "shuxue",
        prefix: "math_basics/",
        children: "structure",
        collapsible: true,
      },
      {
        text: "视觉基础",
        icon: "tuxing",
        prefix: "visual_basics/",
        children: "structure",
        collapsible: true,
      },
      {
        text: "视觉高级",
        icon: "sanwei",
        prefix: "visual_advanced/",
        children: "structure",
        collapsible: true,
      },
      {
        text: "性能优化",
        icon: "xingneng",
        prefix: "performance/",
        children: "structure",
        collapsible: true,
      },
      {
        text: "数据处理",
        icon: "shuju",
        prefix: "data/",
        children: "structure",
        collapsible: true,
      },
    ],
    // children: "structure",
    collapsible: true,
  },
  {
    text: "Three",
    icon: "three",
    prefix: "three/",
    children: [
      {
        text: "快速上手",
        icon: "discover",
        prefix: "00/",
        children: "structure",
        collapsible: true,
      },
      {
        text: "基本组件",
        icon: "discover",
        prefix: "01/",
        children: "structure",
        collapsible: true,
      },
      {
        text: "光源",
        icon: "discover",
        prefix: "reusability/",
        children: "structure",
        collapsible: true,
      },
      {
        text: "材质",
        icon: "discover",
        prefix: "02/",
        children: "structure",
        collapsible: true,
      },
      {
        text: "几何体",
        icon: "discover",
        prefix: "03/",
        children: "structure",
        collapsible: true,
      },
      {
        text: "高级几何体和二元操作",
        icon: "discover",
        prefix: "04/",
        children: "structure",
        collapsible: true,
      },
      {
        text: "粒子和精灵",
        icon: "discover",
        prefix: "05/",
        children: "structure",
        collapsible: true,
      },
      {
        text: "创建、加载高级网格和几何体",
        icon: "discover",
        prefix: "06/",
        children: "structure",
        collapsible: true,
      },
      {
        text: "创建动画和移动摄像机",
        icon: "discover",
        prefix: "07/",
        children: "structure",
        collapsible: true,
      },
      {
        text: "加载和使用纹理",
        icon: "discover",
        prefix: "08/",
        children: "structure",
        collapsible: true,
      },
      {
        text: "自定义着色器和后期处理",
        icon: "discover",
        prefix: "08/",
        children: "structure",
        collapsible: true,
      },
      {
        text: "在场景中添加物理效果和声音",
        icon: "discover",
        prefix: "08/",
        children: "structure",
        collapsible: true,
      },
      {
        text: "Three.js 案例集锦",
        icon: "discover",
        prefix: "08/",
        children: [
          {
            text: "场景",
            icon: "discover",
            prefix: "essential/",
            children: "structure",
            collapsible: true,
          },
          {
            text: "几何体",
            icon: "discover",
            prefix: "essential/",
            children: "structure",
            collapsible: true,
          },
          {
            text: "光源",
            icon: "discover",
            prefix: "essential/",
            children: "structure",
            collapsible: true,
          },
          {
            text: "材质",
            icon: "discover",
            prefix: "essential/",
            children: "structure",
            collapsible: true,
          },
          {
            text: "后期特效",
            icon: "discover",
            prefix: "essential/",
            children: "structure",
            collapsible: true,
          },
          {
            text: "外部模型",
            icon: "discover",
            prefix: "essential/",
            children: "structure",
            collapsible: true,
          },
        ],
        collapsible: true,
      },
    ],
    collapsible: true,
  },
  {
    text: "Cesium",
    icon: "cesium",
    prefix: "cesium/",
    children: [
      {
        text: "概述",
        icon: "zhinanzhen",
        prefix: "guide/",
        children: "structure",
        collapsible: true,
      },
      {
        text: "快速上手",
        icon: "kuaisu",
        prefix: "start/",
        children: "structure",
        collapsible: true,
      },
      {
        text: "数据加载",
        icon: "shuju",
        prefix: "data/",
        children: "structure",
        collapsible: true,
      },
      {
        text: "事件处理",
        icon: "shijian",
        prefix: "event/",
        children: "structure",
        collapsible: true,
      },
      {
        text: "图形绘制",
        icon: "tu",
        prefix: "graph/",
        children: "structure",
        collapsible: true,
      },
      {
        text: "三维模型",
        icon: "D3",
        prefix: "3D/",
        children: "structure",
        collapsible: true,
      },
      {
        text: "材质特效",
        icon: "caizhi",
        prefix: "material/",
        children: "structure",
        collapsible: true,
      },
      {
        text: "工具应用",
        icon: "tools",
        prefix: "tools/",
        children: "structure",
        collapsible: true,
      },
    ],
    // children: "structure",
    collapsible: true,
  },
  {
    text: "AntV",
    icon: "antv",
    prefix: "antv/",
    children: [
      {
        text: "Guide",
        icon: "zhinanzhen",
        prefix: "guide/",
        children: "structure",
        collapsible: true,
      },
      {
        text: "G2Plot",
        icon: "graph",
        prefix: "g2plot/",
        children: "structure",
        collapsible: true,
      },
      {
        text: "L7Plot",
        icon: "earth",
        prefix: "l7plot/",
        children: "structure",
        collapsible: true,
      },
    ],
    // children: "structure",
    collapsible: true,
  },
  {
    text: "VisActor",
    icon: "visactor",
    prefix: "visactor/",
    // children: "structure",
    children: [
      {
        text: "Guide",
        icon: "zhinanzhen",
        prefix: "guide/",
        children: "structure",
        collapsible: true,
      },
      {
        text: "VChart",
        icon: "tuxing",
        prefix: "vchart/",
        children: "structure",
        collapsible: true,
      },
      {
        text: "VTable",
        icon: "table",
        prefix: "vtable/",
        children: "structure",
        collapsible: true,
      },
      {
        text: "VGrammar",
        icon: "grammar",
        prefix: "vgrammar/",
        children: "structure",
        collapsible: true,
      },
      {
        text: "VRender",
        icon: "render",
        prefix: "vrender/",
        children: "structure",
        collapsible: true,
      },
      {
        text: "VGraph",
        icon: "graph",
        prefix: "vgraph/",
        children: "structure",
        collapsible: true,
      },
      {
        text: "VGIS",
        icon: "earth",
        prefix: "vgis/",
        children: "structure",
        collapsible: true,
      },
    ],
    collapsible: true,
  },
  {
    text: "音视频",
    icon: "mobile",
    prefix: "vgis/",
    collapsible: true,
    children:[
      {
        text: "WebRTC",
        prefix: "WebRTC/",
        children: "structure",
        collapsible: true,
      }
    ]
  },
]);
