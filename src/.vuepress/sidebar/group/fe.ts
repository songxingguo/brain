// @ts-ignore
import { arraySidebar } from "vuepress-theme-hope";

export const fe = arraySidebar([
  {
    icon: "guide",
    text: "Guide",
    prefix: "guide/",
    children: "structure",
    collapsible: true,
  },
  {
    text: "HTML",
    icon: "html5",
    prefix: "html/",
    children: "structure",
    collapsible: true,
  },
  {
    text: "CSS",
    icon: "css3",
    prefix: "css/",
    children: "structure",
    collapsible: true,
  },
  {
    text: "JS",
    icon: "javascript",
    prefix: "js/",
    children: "structure",
    collapsible: true,
  },
  {
    text: "TS",
    icon: "typescript",
    prefix: "ts/",
    children: "structure",
    collapsible: true,
  },
  {
    text: "Vue",
    icon: "vue",
    prefix: "vue/",
    // children: "structure",
    children: [
      {
        text: "Hello",
        icon: "hi-1",
        prefix: "hello/",
        children: "structure",
        collapsible: true,
      },
      {
        text: "Learn",
        icon: "xuexi",
        prefix: "learn/",
        children: [
          {
            text: "基础",
            icon: "files",
            prefix: "essential/",
            children: "structure",
            collapsible: true,
          },
          {
            text: "深入组件",
            icon: "files",
            prefix: "components/",
            children: "structure",
            collapsible: true,
          },
          {
            text: "逻辑复用",
            icon: "files",
            prefix: "reusability/",
            children: "structure",
            collapsible: true,
          },
          {
            text: "内置组件",
            icon: "files",
            prefix: "built-ins/",
            children: "structure",
            collapsible: true,
          },
          {
            text: "应用规模化",
            icon: "files",
            prefix: "scaling-up/",
            children: "structure",
            collapsible: true,
          },
          {
            text: "最佳实践",
            icon: "files",
            prefix: "best-practices/",
            children: "structure",
            collapsible: true,
          },
          {
            text: "TypeScript",
            icon: "files",
            prefix: "typescript/",
            children: "structure",
            collapsible: true,
          },
          {
            text: "进阶主题",
            icon: "files",
            prefix: "extras/",
            children: "structure",
            collapsible: true,
          },
        ],
        collapsible: true,
      },
      {
        text: "Use",
        icon: "use",
        prefix: "use/",
        children: [
          {
            text: "全家桶",
            icon: "files",
            prefix: "extras/",
            children: "structure",
            collapsible: true,
          },
          {
            text: "组件库",
            icon: "files",
            prefix: "extras/",
            children: "structure",
            collapsible: true,
          },
          {
            text: "B 站前端",
            icon: "files",
            prefix: "extras/",
            children: "structure",
            collapsible: true,
          },
        ],
        collapsible: true,
      },
      {
        text: "Know",
        icon: "know",
        prefix: "know/",
        children: "structure",
        collapsible: true,
      },
      {
        text: "Love",
        icon: "love",
        prefix: "love/",
        children: "structure",
        collapsible: true,
      },
    ],
    collapsible: true,
  },
  {
    text: "React",
    icon: "react",
    prefix: "react/",
    children: [
      {
        text: "Demo",
        icon: "quick-start",
        prefix: "demo/",
        children: "structure",
        collapsible: true,
      },
      {
        text: "快速上手",
        icon: "quick-start",
        prefix: "essential/",
        children: "structure",
        collapsible: true,
      },
      {
        text: "创建项目",
        icon: "create",
        prefix: "components/",
        children: "structure",
        collapsible: true,
      },
      {
        text: "描述 UI",
        icon: "ui",
        prefix: "reusability/",
        children: "structure",
        collapsible: true,
      },
      {
        text: "添加交互",
        icon: "jiaohu",
        prefix: "built-ins/",
        children: "structure",
        collapsible: true,
      },
      {
        text: "状态管理",
        icon: "status",
        prefix: "scaling-up/",
        children: "structure",
        collapsible: true,
      },
      {
        text: "应急预案",
        icon: "warn",
        prefix: "best-practices/",
        children: "structure",
        collapsible: true,
      },
    ],
    collapsible: true,
  },
  {
    text: "Node",
    icon: "node",
    prefix: "node/",
    children: [
      {
        text: "Express",
        icon: "express",
        prefix: "express/",
        children: "structure",
        collapsible: true,
      },
      {
        text: "Egg",
        icon: "egg",
        prefix: "egg/",
        children: "structure",
        collapsible: true,
      },
    ],
    collapsible: true,
  },
  {
    text: "SSR",
    icon: "server",
    prefix: "ssr/",
    children: [
      {
        text: "Nuxt",
        icon: "nuxt",
        prefix: "vitest/",
        children: "structure",
        collapsible: true,
      },
      {
        text: "Next",
        icon: "next",
        prefix: "vitest/",
        children: "structure",
        collapsible: true,
      },
    ],
    collapsible: true,
  },
  {
    text: "Mobile",
    icon: "mobile",
    prefix: "ssr/",
    children: [
      {
        text: "Flutter",
        icon: "flutter",
        prefix: "vitest/",
        children: "structure",
        collapsible: true,
      },
      {
        text: "React Native",
        icon: "react-native",
        prefix: "vitest/",
        children: "structure",
        collapsible: true,
      },
    ],
    collapsible: true,
  },
  {
    text: "MiniAPP",
    icon: "miniapp",
    prefix: "ssr/",
    children: [
      {
        text: "uni-app",
        icon: "flutter",
        prefix: "vitest/",
        children: "structure",
        collapsible: true,
      },
    ],
    collapsible: true,
  },
  {
    text: "Desktop",
    icon: "desktop",
    prefix: "ssr/",
    children: [
      {
        text: "Flutter",
        icon: "flutter",
        prefix: "vitest/",
        children: "structure",
        collapsible: true,
      },
      {
        text: "Electron",
        icon: "electron",
        prefix: "vitest/",
        children: "structure",
        collapsible: true,
      },
    ],
    collapsible: true,
  },
  {
    text: "Tools",
    icon: "tool",
    prefix: "tools/",
    children: [
      {
        text: "Git",
        icon: "git",
        prefix: "git/",
        children: "structure",
        collapsible: true,
      },
      {
        text: "VSCode",
        icon: "vscode",
        prefix: "vscode/",
        children: "structure",
        collapsible: true,
      },
      {
        text: "VSCode Extension",
        icon: "cj",
        prefix: "vscode_extension/",
        children: "structure",
        collapsible: true,
      },
      {
        text: "Package Manager",
        icon: "package",
        prefix: "package-manage/",
        children: "structure",
        collapsible: true,
      },
    ],
    collapsible: true,
  },
  {
    text: "BuildTools",
    icon: "build",
    prefix: "tools/",
    children: [
      {
        text: "Vite",
        icon: "vite",
        prefix: "vite/",
        children: "structure",
        collapsible: true,
      },
      {
        text: "CI/CD",
        icon: "ci",
        prefix: "ci/",
        children: "structure",
        collapsible: true,
      },
    ],
    collapsible: true,
  },
  {
    text: "TestTools",
    icon: "debug",
    prefix: "tools/",
    children: [
      {
        text: "Vitest",
        icon: "test",
        prefix: "vitest/",
        children: "structure",
        collapsible: true,
      },
      {
        text: "Mock.js",
        icon: "mock",
        prefix: "mock/",
        children: "structure",
        collapsible: true,
      },
    ],
    collapsible: true,
  },
]);
