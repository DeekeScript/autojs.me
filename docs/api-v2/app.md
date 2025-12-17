# app - 应用

应用管理相关 API。

## app.launchApp(name)

**功能：** 启动应用

```javascript
import { app } from '@autojs/pro'

await app.launchApp("微信");
await app.launchApp("com.tencent.mm");
```

## app.launch(packageName, activityName)

**功能：** 启动指定的Activity

```javascript
await app.launch("com.example.app", "com.example.MainActivity");
```

## app.currentPackage()

**功能：** 获取当前应用的包名

```javascript
const package = await app.currentPackage();
console.log("当前包名：" + package);
```

## app.currentActivity()

**功能：** 获取当前Activity名称

```javascript
const activity = await app.currentActivity();
console.log("当前Activity：" + activity);
```

## app.getAppName(packageName)

**功能：** 获取应用名称

```javascript
const name = await app.getAppName("com.tencent.mm");
console.log("应用名称：" + name);
```

## app.openAppSetting(packageName)

**功能：** 打开应用设置页面

```javascript
await app.openAppSetting("com.tencent.mm");
```

