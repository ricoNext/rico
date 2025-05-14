# mock

- 安装依赖

```bash
pnpm add mockjs vite-plugin-mock -D
```

- 配置 Vite 插件

在 vite.config.ts 中添加：

```ts
plugins: [
   viteMockServe({
    // mock 数据的目录地址
    mockPath: 'mock',
    // 监听文件变化
    watchFiles: true,
    // 打开 mock 能力
    enable: true,
   }),
  ],
```
