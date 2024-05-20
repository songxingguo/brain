export const DemoPlugin = (options) => {
  return (app) => {
    return {
      name: "vuepress-plugin-demo",
      async onInitialized(app) {
        console.log("--onInitialized");
      },
      extendsBundlerOptions(bundlerOptions, app) {
        console.log("bundlerOptions", bundlerOptions.viteOptions);
      },
    };
  };
};
