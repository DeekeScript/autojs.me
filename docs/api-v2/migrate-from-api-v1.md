# 如何从第一代API迁移过来

本文档介绍如何从 Auto.js Pro 第一代 API 迁移到第二代 API（V9）。

## 主要变化

### 1. 模块导入方式

**第一代 API：**
```javascript
// 直接使用全局对象
app.launchApp("微信");
files.read("/sdcard/data.txt");
```

**第二代 API：**
```javascript
// 使用 ES6 模块导入
import { app } from '@autojs/pro'
import { files } from '@autojs/pro'

app.launchApp("微信");
files.read("/sdcard/data.txt");
```

### 2. 异步操作

**第一代 API：**
```javascript
// 同步操作
var content = files.read("/sdcard/data.txt");
```

**第二代 API：**
```javascript
// 异步操作（Promise）
const content = await files.read("/sdcard/data.txt");
// 或使用 .then()
files.read("/sdcard/data.txt").then(content => {
    console.log(content);
});
```

### 3. 控件操作

**第一代 API：**
```javascript
text("确定").click();
var btn = id("btn").findOne();
btn.click();
```

**第二代 API：**
```javascript
import { uiSelector } from '@autojs/pro'

const btn = await uiSelector.text("确定").findOne();
await btn.click();
```

### 4. 图片处理

**第一代 API：**
```javascript
var img = captureScreen();
var point = images.findImage(img, template);
```

**第二代 API：**
```javascript
import { image } from '@autojs/pro'

const img = await image.captureScreen();
const point = await image.findImage(img, template);
```

### 5. HTTP 请求

**第一代 API：**
```javascript
var response = http.get("https://api.example.com/data");
console.log(response.body.string());
```

**第二代 API：**
```javascript
import { axios } from '@autojs/pro'

const response = await axios.get("https://api.example.com/data");
console.log(response.data);
```

### 6. 文件操作

**第一代 API：**
```javascript
files.write("/sdcard/data.txt", "content");
var content = files.read("/sdcard/data.txt");
```

**第二代 API：**
```javascript
import { files } from '@autojs/pro'

await files.write("/sdcard/data.txt", "content");
const content = await files.read("/sdcard/data.txt");
```

### 7. 存储操作

**第一代 API：**
```javascript
storage.put("key", "value");
var value = storage.get("key");
```

**第二代 API：**
```javascript
import { datastore } from '@autojs/pro'

await datastore.put("key", "value");
const value = await datastore.get("key");
```

### 8. 定时器

**第一代 API：**
```javascript
var timer = setTimeout(function() {
    console.log("延迟执行");
}, 1000);
```

**第二代 API：**
```javascript
// 使用 Promise
await new Promise(resolve => setTimeout(resolve, 1000));
console.log("延迟执行");
```

## 迁移步骤

1. **更新项目配置**
   - 更新 `package.json` 依赖
   - 安装 `@autojs/pro` 包

2. **修改导入语句**
   - 将所有全局对象改为模块导入
   - 使用 ES6 import 语法

3. **处理异步操作**
   - 将同步操作改为异步
   - 使用 `async/await` 或 `.then()`

4. **更新 API 调用**
   - 检查 API 名称变化
   - 更新参数格式
   - 处理返回值变化

5. **测试和调试**
   - 逐步测试每个功能
   - 修复兼容性问题

## 常见问题

### Q: 如何保持向后兼容？

A: 可以在代码中同时支持两代 API，根据环境自动选择：

```javascript
if (typeof require !== 'undefined') {
    // 第一代 API
    var app = require('app');
} else {
    // 第二代 API
    import { app } from '@autojs/pro';
}
```

### Q: 性能有提升吗？

A: 第二代 API 使用 Node.js 引擎，性能更好，支持更多现代 JavaScript 特性。

### Q: 所有功能都支持吗？

A: 大部分功能都已迁移，部分功能可能有 API 变化，请参考具体模块文档。

## 更多资源

- [V9 文档](/api-v2/v9)
- [各模块 API 文档](/api-v2)

