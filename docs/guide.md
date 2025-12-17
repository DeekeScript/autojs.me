# Auto.js Pro 指南

欢迎使用 Auto.js Pro！这是一个强大的 JavaScript IDE，专为 Android 自动化而设计。

## 快速开始

### 安装应用

1. 从官网或应用商店下载 Auto.js Pro
2. 安装 APK 文件到 Android 设备
3. 开启无障碍服务：
   - 打开设置 → 无障碍
   - 找到 Auto.js Pro 并开启
   - 这是使用自动化功能的前提

### 环境要求

- Android 5.0 及以上版本
- 已开启无障碍服务
- 足够的存储空间（建议至少 100MB）

## 基础概念

### 什么是 Auto.js Pro？

Auto.js Pro 是一个基于 JavaScript 的 Android 自动化工具，允许你编写脚本来控制 Android 设备，实现各种自动化任务。

### 核心特性

- **Node.js 引擎**：基于 Node.js 16.x，性能提升 100 倍以上
- **丰富的 API**：提供 UI 操作、文件系统、网络请求、图像处理等 API
- **VSCode 调试**：支持远程单步调试、断点、变量查看等
- **Npm 生态**：可以使用 200 万个 npm 包
- **插件系统**：支持插件扩展功能

## 编写第一个脚本

### Hello World

最简单的脚本示例：

```javascript
// 显示提示消息
toast("Hello, Auto.js Pro!");

// 输出到控制台
console.log("Hello World");
```

### 点击操作

```javascript
// 点击屏幕坐标
click(500, 1000);

// 查找并点击文本
text("确定").click();

// 通过 ID 点击
id("btn_ok").click();
```

### 等待操作

```javascript
// 等待 Activity 出现
waitForActivity("com.example.MainActivity");

// 等待控件出现
text("登录").waitFor();

// 延迟执行
sleep(1000); // 延迟 1 秒
```

### 应用启动

```javascript
// 启动应用
launchApp("微信");

// 启动指定 Activity
launch("com.example.app", "com.example.MainActivity");
```

## UI 操作

### 坐标点击

```javascript
// 点击指定坐标
click(500, 1000);

// 长按
longClick(500, 1000);

// 滑动
swipe(500, 1000, 500, 500, 500);
```

### 控件查找

```javascript
// 通过文本查找
text("确定").click();

// 通过 ID 查找
id("btn_ok").click();

// 通过描述查找
desc("确定按钮").click();

// 通过类名查找
className("android.widget.Button").clickable().findOne().click();
```

### 控件操作

```javascript
// 点击
text("确定").click();

// 输入文本
id("input").setText("Hello");

// 清空文本
id("input").setText("");

// 滚动
scrollable().scrollForward();
```

### 等待控件

```javascript
// 等待控件出现（最多等待 10 秒）
var btn = text("确定").findOne(10000);
if (btn) {
    btn.click();
}

// 一直等待直到找到
text("确定").waitFor();
text("确定").click();

// 判断控件是否存在
if (text("确定").exists()) {
    text("确定").click();
}
```

## 文件操作

### 读写文件

```javascript
// 读取文本文件
var content = files.read("/sdcard/data.txt");
console.log(content);

// 写入文本文件
files.write("/sdcard/data.txt", "Hello World");

// 追加内容
files.append("/sdcard/log.txt", "新的一行\n");

// 读取二进制文件
var bytes = files.readBytes("/sdcard/image.jpg");

// 写入二进制文件
files.writeBytes("/sdcard/copy.jpg", bytes);
```

### 目录操作

```javascript
// 判断文件是否存在
if (files.exists("/sdcard/data.txt")) {
    console.log("文件存在");
}

// 创建目录
files.ensureDir("/sdcard/myapp/data");

// 列出目录内容
var fileList = files.listDir("/sdcard");
fileList.forEach(function(file) {
    console.log(file);
});

// 删除文件
files.remove("/sdcard/data.txt");
```

## 网络请求

### GET 请求

```javascript
// 简单 GET 请求
var response = http.get("https://api.example.com/data");
console.log(response.body.string());

// 带参数的 GET 请求
var response = http.get("https://api.example.com/data", {
    headers: {
        "User-Agent": "Auto.js",
        "Authorization": "Bearer token"
    }
});
```

### POST 请求

```javascript
// POST 表单数据
var response = http.post("https://api.example.com/data", {
    key: "value"
});

// POST JSON 数据
var response = http.postJson("https://api.example.com/data", {
    name: "Auto.js",
    version: "4.1.1"
});
```

## 图像处理

### 截图和查找

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

// 查找颜色
var point = images.findColor(img, "#ff0000");
if (point) {
    click(point.x, point.y);
}
```

## 定时任务

```javascript
// 使用 setInterval
var timer = setInterval(function() {
    console.log("定时执行");
}, 1000);

// 5 秒后停止
setTimeout(function() {
    clearInterval(timer);
}, 5000);
```

## 多线程

```javascript
// 创建线程
var thread = threads.start(function() {
    // 在后台执行的任务
    while (true) {
        console.log("后台任务");
        sleep(1000);
    }
});

// 停止线程
thread.interrupt();
```

## 错误处理

```javascript
try {
    text("确定").click();
} catch (e) {
    console.error("点击失败：" + e);
    toast("操作失败");
}

// 使用 findOne 的安全方式
var btn = text("确定").findOne(5000);
if (btn) {
    btn.click();
} else {
    toast("未找到按钮");
}
```

## 常见问题

### 控件找不到

- 检查无障碍服务是否开启
- 增加等待时间
- 使用更宽泛的查找条件
- 检查应用是否已启动
- 使用坐标点击作为备选方案

### 脚本执行失败

- 检查权限是否授予
- 检查网络连接
- 查看错误日志
- 使用 try-catch 捕获异常

## 学习资源

- [第一代 API 文档](/api-v1) - 基础 API 参考
- [第二代 API 文档](/api-v2) - Node.js 引擎 API
- [QQ 交流群](https://jq.qq.com/?_wv=1027&k=642877773) - 642877773
