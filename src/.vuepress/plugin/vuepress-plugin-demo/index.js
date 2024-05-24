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
          bundlerOptions.viteOptions.build.target ??= "esnext"
          // bundlerOptions.viteOptions.esbuild.supported['top-level-await'] ??= "true"
        }
        console.log("bundlerOptions", bundlerOptions);
      },
    };
  };
};
