# Docusaurus 文档平台

一套框架管理多个独立项目的文档。

## 快速开始

```bash
# 安装依赖
npm install

# 启动开发服务器
npm start

# 同步子项目文档
npm run sync
```

## 添加新文档项目

1. 在 `scripts/sync-docs.js` 的 `PROJECTS` 中添加配置
2. 运行 `npm run sync:项目名` 同步文档
3. 在 `docusaurus.config.js` 的导航栏中添加链接

## 目录说明

- `docs/` - 同步后的文档内容（自动生成）
- `projects/` - 子项目 Git 仓库
- `scripts/` - 同步脚本
