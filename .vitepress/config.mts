import fs from "fs";
import { defineConfig } from "vitepress";

const articles = fs.readdirSync("./articles/OAuth");

// 读取文件内容
const articlesList = articles
	.map((article) => {
		const content = fs.readFileSync(`./articles/OAuth/${article}`, "utf-8");
		const title = content.match(/# (.*)/)?.[1];
		return {
			text: title,
			link: `/articles/OAuth/${article}`,
		};
	})
	.sort((a: any, b: any) => a?.text?.localeCompare(b?.text));

export default defineConfig({
	title: "Rico Next",
	lang: "zh-CN",
	titleTemplate: ":title - Rico Next",
	description: "Rico Next",
	head: [["link", { rel: "icon", href: "/favicon.ico" }]],
	themeConfig: {
		logo: "/logo.png",
		search: {
			provider: "local",
		},
		nav: [
			{
				text: "个人笔记",
				activeMatch: "/notes/",
				link: "/notes/json-schema",
			},
			{
				text: "技术摘抄",
				activeMatch: "/articles/",
				items: [{ text: "OAuth 2.0", link: "/articles/OAuth" }],
			},
			{
				text: "开源项目",
				link: "/ts-enum-next",
				activeMatch: "/ts-enum-next/",
			},
			// {
			//   text: "Super Rico",
			//   link: "https://super-rico.vercel.app",
			// },
		],

		sidebar: {
			"/notes/": {
				base: "",
				items: [
					{
						text: "2025",
						collapsed: true,
						items: [
							{ text: "JSON Schema", link: "/notes/json-schema" },
							{ text: "pnpm", link: "/notes/pnpm" },
							{ text: "GC 垃圾回收", link: "/notes/GC" },
							{ text: "Ultracite", link: "/notes/ultracite" },
						],
					},
				],
			},
			"/articles/": {
				base: "",
				items: [
					{
						text: "OAuth 2.0",
						collapsed: true,
						items: articlesList,
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
