# 项目与资源

## 项目结构

<img src="/images/project-menu.b422b5e8.jpg" alt="项目菜单" width="50%">

一个典型的 Auto.js Pro 项目结构如下：

```
myproject/
├── main.js          # 主入口文件
├── utils.js         # 工具函数
├── config.js        # 配置文件
├── project.json     # 项目配置
└── resources/       # 资源文件
    ├── images/      # 图片资源
    └── data/        # 数据文件
```

## 资源管理

### 图片资源

```javascript
// 读取资源图片
var img = images.read("./resources/images/logo.png");
```

### 数据文件

```javascript
// 读取资源数据
var data = files.read("./resources/data/config.json");
var config = JSON.parse(data);
```

## 项目配置

项目配置文件 `project.json` 包含项目的基本信息：

```json
{
  "name": "我的项目",
  "version": "1.0.0",
  "main": "main.js",
  "description": "项目描述"
}
```

## 模块组织

### 按功能组织

```
project/
├── ui/              # UI 相关模块
├── utils/           # 工具模块
├── api/             # API 相关模块
└── config/           # 配置模块
```

### 按页面组织

```
project/
├── pages/           # 页面模块
│   ├── home.js
│   └── settings.js
├── components/      # 组件模块
└── services/        # 服务模块
```

## 代码复用

### 公共函数

```javascript
// common.js
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

module.exports = { sleep };
```

### 工具类

```javascript
// Utils.js
class Utils {
    static formatDate(date) {
        // 格式化日期
    }
}

module.exports = Utils;
```

