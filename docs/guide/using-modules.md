# 使用内置模块和函数

## 模块导入

### 第一代 API

```javascript
// 直接使用全局对象
app.launchApp("微信");
files.read("/sdcard/data.txt");
http.get("https://api.example.com/data");
```

### 第二代 API (V9)

```javascript
// 使用 ES6 模块导入
import { app } from '@autojs/pro'
import { files } from '@autojs/pro'
import { axios } from '@autojs/pro'

await app.launchApp("微信");
const content = await files.read("/sdcard/data.txt");
const response = await axios.get("https://api.example.com/data");
```

## 常用模块

<img src="/images/examples.dc88f4c7.jpg" alt="使用模块示例" width="50%">

### 文件操作

```javascript
// 读取文件
var content = files.read("/sdcard/data.txt");

// 写入文件
files.write("/sdcard/data.txt", "Hello World");

// 判断文件是否存在
if (files.exists("/sdcard/data.txt")) {
    console.log("文件存在");
}
```

### 网络请求

```javascript
// GET 请求
var response = http.get("https://api.example.com/data");
console.log(response.body.string());

// POST 请求
var response = http.post("https://api.example.com/data", {
    key: "value"
});
```

### 图像处理

```javascript
// 截图
var img = captureScreen();

// 保存截图
images.save(img, "/sdcard/screenshot.png");

// 查找图片
var template = images.read("/sdcard/template.png");
var point = images.findImage(img, template);
if (point) {
    click(point.x, point.y);
}
```

## 自定义模块

### 创建模块

```javascript
// utils.js
function add(a, b) {
    return a + b;
}

module.exports = {
    add: add
};
```

### 使用模块

```javascript
// main.js
const utils = require('./utils');
var result = utils.add(1, 2);
console.log(result);
```

