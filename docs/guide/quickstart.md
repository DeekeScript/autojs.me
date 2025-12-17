# 编写第一行代码

## Hello World

最简单的脚本示例：

```javascript
// 显示提示消息
toast("Hello, Auto.js Pro!");

// 输出到控制台
console.log("Hello World");
```

<img src="/images/helloworld-fab.b1643c81.jpg" alt="创建新文件" width="50%">

<img src="/images/helloworld-file.1a9d555c.jpg" alt="编写代码" width="50%">

<img src="/images/helloworld-toastlog.dedafc18.jpg" alt="Toast和日志" width="50%">

<img src="/images/helloworld-run.cb4f2a9a.jpg" alt="运行脚本" width="50%">

## 基本操作

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

## 完整示例

```javascript
// 启动应用
launchApp("微信");
sleep(2000);

// 等待登录界面
waitForActivity("com.tencent.mm.ui.LauncherUI");

// 输入账号
id("username").setText("your_username");

// 输入密码
id("password").setText("your_password");

// 点击登录按钮
text("登录").click();

// 等待登录完成
waitForActivity("com.tencent.mm.ui.MainTabUI");
toast("登录成功");
```

