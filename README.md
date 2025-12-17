# Auto.js Pro 网站复制项目 (React 版本)

这是 Auto.js Pro 官方网站 (http://autojs.cc/) 的完整 React 复制项目。

## 项目特性

- ✅ 使用 React 18 + Vite 构建
- ✅ React Router 路由管理
- ✅ 完整的导航页面和文档内容
- ✅ 响应式设计，支持移动端
- ✅ 现代化 UI 设计
- ✅ 所有导航内容已完整实现

## 项目结构

```
autojs/
├── src/
│   ├── components/          # 可复用组件
│   │   ├── Navbar.jsx      # 导航栏组件
│   │   ├── Footer.jsx      # 页脚组件
│   │   ├── Hero.jsx        # 英雄区域组件
│   │   └── Features.jsx    # 功能特性组件
│   ├── pages/              # 页面组件
│   │   ├── Home.jsx        # 首页
│   │   ├── Guide.jsx       # 指南页面
│   │   ├── ApiV1.jsx       # 第一代API文档
│   │   ├── ApiV2.jsx       # 第二代API文档
│   │   ├── CustomFunctions.jsx  # 自定义函数
│   │   ├── Blog.jsx        # 博客页面
│   │   └── Links.jsx       # 相关链接页面
│   ├── App.jsx             # 主应用组件
│   ├── main.jsx            # 入口文件
│   └── index.css           # 全局样式
├── index.html              # HTML 模板
├── package.json            # 项目配置
├── vite.config.js          # Vite 配置
└── README.md               # 项目说明
```

## 安装依赖

```bash
npm install
```

## 开发调试

```bash
npm run dev
```

启动开发服务器，默认在 `http://localhost:3000` 运行。

## 构建生产版本

```bash
npm run build
```

构建后的文件将输出到 `dist` 目录。

## 预览生产构建

```bash
npm run preview
```

## 页面列表

- **首页** (`/`) - 展示 Auto.js Pro 的主要功能和特性
- **指南** (`/guide`) - 快速开始指南和基础概念
- **第一代API文档** (`/api-v1`) - 基础 API 参考文档
- **第二代API文档** (`/api-v2`) - Node.js 引擎 API 文档
- **自定义函数** (`/custom-functions`) - 自定义函数开发指南
- **博客** (`/blog`) - 技术文章和教程
- **相关链接** (`/links`) - 官方链接、下载和社区资源

## 功能特性

### 导航栏
- 响应式导航菜单
- 下拉菜单支持
- 搜索功能（Ctrl+K 快捷键）
- 活动路由高亮

### 首页
- 英雄区域展示
- 12 个功能特性卡片
- 滚动动画效果
- 渐变背景设计

### 文档页面
- 完整的 API 文档
- 代码示例展示
- 清晰的章节结构
- 响应式布局

## 技术栈

- **React 18** - UI 框架
- **React Router 6** - 路由管理
- **Vite** - 构建工具
- **CSS3** - 样式设计

## 浏览器兼容性

- Chrome (推荐)
- Firefox
- Safari
- Edge
- 移动端浏览器

## 开发说明

### 添加新页面

1. 在 `src/pages/` 目录创建新页面组件
2. 在 `src/App.jsx` 中添加路由
3. 在 `src/components/Navbar.jsx` 中添加导航链接

### 样式修改

- 全局样式：修改 `src/index.css`
- 组件样式：每个组件都有对应的 CSS 文件
- 页面样式：使用 `src/pages/Page.css`

## 注意事项

- 本项目仅用于学习和参考目的
- 所有链接和功能按钮为示例，实际功能需要连接到相应的后端服务
- 搜索功能目前为演示版本，需要根据实际需求进行开发

## 更新日志

- 2024-01: 初始版本，使用 React 完整复制 Auto.js Pro 官方网站内容
