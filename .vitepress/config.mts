import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Rico Next",
  lang: "zh-CN",
  titleTemplate: ":title - Rico Next",
  description: "Rico Next",
  head: [["link", { rel: "icon", href: "/favicon.ico" }]],
  themeConfig: {
    logo: "/logo.png",
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      {
        text: "Note",
        activeMatch: "/notes/",
        items: [{ text: "工程类", link: "/notes/json-schema" }],
      },
      {
        text: "开源项目",
        link: "/ts-enum-next",
        activeMatch: "/ts-enum-next/",
      },
      {
        text: "Super Rico",
        link: "https://super-rico.vercel.app",
      },
    ],

    sidebar: {
      "/notes/": {
        base: "",
        items: [
          {
            text: "2025",
            collapsed: true,
            items: [{ text: "JSON Schema", link: "/notes/json-schema" }],
          },
        ],
      },
      "/ts-enum-next/": {
        base: "",
        items: [{ text: "首页", link: "/ts-enum-next/index" }],
      },
    },
    socialLinks: [{ icon: "github", link: "https://github.com/ricoNext" }],
  },
});
