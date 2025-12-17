# Auto.js Pro 文档网站

这是 Auto.js Pro 文档网站，使用 VitePress 构建。

## 项目特性

- ✅ 完全基于 Markdown
- ✅ 使用 VitePress 构建
- ✅ 自动生成导航和侧边栏
- ✅ 响应式设计，支持移动端
- ✅ 代码高亮支持
- ✅ 本地搜索功能

## 安装依赖

```bash
npm install
```

## 开发调试

```bash
npm run dev
```

启动开发服务器，默认在 `http://localhost:5173` 运行。

## 构建生产版本

```bash
npm run build
```

构建后的文件将输出到 `docs/.vitepress/dist` 目录。

## 预览生产构建

```bash
npm run preview
```

## 项目结构

```
autojs/
├── docs/                    # 文档目录
│   ├── .vitepress/         # VitePress 配置
│   │   └── config.js       # 配置文件
│   ├── api-v1/             # 第一代API文档
│   ├── api-v2/             # 第二代API文档
│   ├── index.md            # 首页
│   ├── guide.md            # 指南
│   └── links.md            # 相关链接
├── package.json            # 项目配置
└── README.md               # 项目说明
```

## 页面列表

- **首页** (`/`) - 展示 Auto.js Pro 的主要功能和特性
- **指南** (`/guide`) - 快速开始指南和基础概念
- **第一代API文档** (`/api-v1`) - 基础 API 参考文档
- **第二代API文档** (`/api-v2`) - Node.js 引擎 API 文档
- **相关链接** (`/links`) - 官方链接、下载和社区资源

## 技术栈

- **VitePress** - 文档框架
- **Markdown** - 内容格式
- **Vite** - 构建工具

## 浏览器兼容性

- Chrome (推荐)
- Firefox
- Safari
- Edge
- 移动端浏览器

## 注意事项

- 所有内容都使用 Markdown 格式
- 导航和侧边栏在 `docs/.vitepress/config.js` 中配置
- 修改 Markdown 文件后，页面会自动更新
