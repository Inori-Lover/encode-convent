import { defineConfig } from "umi";
const fiber = require("fibers");
const ucid = require("unique-commit-id");

ucid.latest();

const __DEV__: boolean = process.env.NODE_ENV === "development";

export default defineConfig({
  antd: {},
  base: "/admin/",
  publicPath: "/admin/",
  runtimePublicPath: true,
  title: "预警系统 登录后台",
  hash: !__DEV__,
  dva: {
    immer: true,
    disableModelsReExport: true,
    skipModelValidate: true,
  },
  targets: {
    chrome: 86,
    firefox: 80,
    safari: 14,
    edge: false,
    ios: false,
    android: false,
  },
  devServer: {
    host: "127.0.0.1",
  },
  dynamicImport: {},
  forkTSChecker: {},
  // 没有感知新依赖会导致依赖没有引入，可能导致js(逻辑报错)或css(样式不生效)方面的debug困难
  fastRefresh: false,
  ignoreMomentLocale: true,
  // devtool: __DEV__ ? "source-map" : undefined,
  define: {
    __DEV__: __DEV__,
    __REL__: "noopener noreferrer nofollow",
    __VER__: ucid.latest(),
    __BUILD_AT__: Date.now(),
  },
  sass: {
    sassOptions: {
      fiber,
    },
  },
  // webpack5 + esbuild 692.4
  // webpack5 + terser 645.25
  // umi + esbuild 713.69
  // umi + terser 673.64
  esbuild: {},
});
