# 快速开始指南

## 第一步：安装依赖

```bash
npm install
```

这将安装所有必需的依赖包，包括：
- React 18
- React Router DOM
- Vite
- 相关开发依赖

## 第二步：启动开发服务器

```bash
npm run dev
```

开发服务器将在 `http://localhost:3000` 启动，并自动在浏览器中打开。

## 第三步：构建生产版本

```bash
npm run build
```

构建完成后，生产文件将输出到 `dist` 目录。

## 可用命令

- `npm run dev` - 启动开发服务器
- `npm run build` - 构建生产版本
- `npm run preview` - 预览生产构建

## 项目结构说明

- `src/components/` - 可复用的 React 组件
- `src/pages/` - 页面组件（路由页面）
- `src/App.jsx` - 主应用组件，包含路由配置
- `src/main.jsx` - React 应用入口点

## 访问页面

启动开发服务器后，可以访问以下页面：

- http://localhost:3000/ - 首页
- http://localhost:3000/guide - 指南
- http://localhost:3000/api-v1 - 第一代API文档
- http://localhost:3000/api-v2 - 第二代API文档
- http://localhost:3000/custom-functions - 自定义函数
- http://localhost:3000/blog - 博客
- http://localhost:3000/links - 相关链接

## 常见问题

### 端口被占用

如果 3000 端口被占用，Vite 会自动尝试下一个可用端口。

### 依赖安装失败

确保已安装 Node.js (推荐 v16 或更高版本) 和 npm。

### 构建失败

确保所有依赖都已正确安装，运行 `npm install` 重新安装。

