# app - 应用

应用管理相关 API。

## app.launchApp(name)

**功能：** 启动应用

**参数：** name - 应用名称或包名

```javascript
app.launchApp("微信");
app.launchApp("com.tencent.mm");
app.launch("com.tencent.mm", "com.tencent.mm.ui.LauncherUI");
```

## app.launch(packageName, activityName)

**功能：** 启动指定的Activity

```javascript
app.launch("com.example.app", "com.example.MainActivity");
```

## app.waitForActivity(activity, timeout)

**功能：** 等待指定的Activity出现

```javascript
app.waitForActivity("com.tencent.mm.ui.LauncherUI");
app.waitForActivity("com.tencent.mm.ui.LauncherUI", 10000);
```

## app.currentPackage()

**功能：** 获取当前应用的包名

```javascript
var package = app.currentPackage();
console.log("当前包名：" + package);
```

## app.currentActivity()

**功能：** 获取当前Activity名称

```javascript
var activity = app.currentActivity();
console.log("当前Activity：" + activity);
```

## app.getAppName(packageName)

**功能：** 获取应用名称

```javascript
var name = app.getAppName("com.tencent.mm");
console.log("应用名称：" + name);
```

## app.openAppSetting(packageName)

**功能：** 打开应用设置页面

```javascript
app.openAppSetting("com.tencent.mm");
```

## app.uninstall(packageName)

**功能：** 卸载应用

```javascript
app.uninstall("com.example.app");
```

## app.getRunningApp()

**功能：** 获取当前正在运行的应用信息

```javascript
var app = app.getRunningApp();
console.log("包名：" + app.packageName);
console.log("Activity：" + app.activityName);
```

## app.getRunningApps()

**功能：** 获取所有正在运行的应用

```javascript
var apps = app.getRunningApps();
apps.forEach(function(app) {
    console.log(app.packageName);
});
```

