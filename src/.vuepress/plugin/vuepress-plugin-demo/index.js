export const DemoPlugin = (options) => {
  return (app) => {
    return {
      name: "vuepress-plugin-demo",
      async onInitialized(app) {
        console.log("--onInitialized");
      },
      extendsBundlerOptions(bundlerOptions, app) {
        // 修改 @vuepress/bundler-vite 的配置项
        if (app.options.bundler.name === '@vuepress/bundler-vite') {
          bundlerOptions.viteOptions.build.target ??= "es2019"
        }
        console.log("bundlerOptions", bundlerOptions);
      },
    };
  };
};
