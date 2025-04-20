import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "Head First Tech",
  description: "深入浅出技术系列",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
