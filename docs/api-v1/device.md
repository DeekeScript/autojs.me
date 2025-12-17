# device - 设备

设备信息相关 API。

## device.width

**功能：** 屏幕宽度（像素）

```javascript
console.log("屏幕宽度：" + device.width);
```

## device.height

**功能：** 屏幕高度（像素）

```javascript
console.log("屏幕高度：" + device.height);
```

## device.model

**功能：** 设备型号

```javascript
console.log("设备型号：" + device.model);
```

## device.brand

**功能：** 设备品牌

```javascript
console.log("设备品牌：" + device.brand);
```

## device.sdkInt

**功能：** Android SDK版本

```javascript
console.log("SDK版本：" + device.sdkInt);
```

## device.release

**功能：** Android版本号

```javascript
console.log("Android版本：" + device.release);
```

## device.getIMEI()

**功能：** 获取设备IMEI

```javascript
var imei = device.getIMEI();
console.log("IMEI：" + imei);
```

## device.getAndroidId()

**功能：** 获取Android ID

```javascript
var androidId = device.getAndroidId();
console.log("Android ID：" + androidId);
```

## device.getMacAddress()

**功能：** 获取MAC地址

```javascript
var mac = device.getMacAddress();
console.log("MAC地址：" + mac);
```

## device.vibrate(millis)

**功能：** 震动设备

```javascript
device.vibrate(500); // 震动500毫秒
```

## device.cancelVibration()

**功能：** 取消震动

```javascript
device.cancelVibration();
```

## device.brightness

**功能：** 获取屏幕亮度（0-255）

```javascript
var brightness = device.brightness;
console.log("亮度：" + brightness);
```

## device.setBrightness(brightness)

**功能：** 设置屏幕亮度

```javascript
device.setBrightness(128); // 设置为中等亮度
```

## device.isScreenOn()

**功能：** 判断屏幕是否点亮

```javascript
if (!device.isScreenOn()) {
    device.wakeUp();
}
```

## device.wakeUp()

**功能：** 唤醒设备

```javascript
device.wakeUp();
```

## device.keepScreenOn()

**功能：** 保持屏幕常亮

```javascript
device.keepScreenOn();
```

## device.keepScreenDim()

**功能：** 保持屏幕微亮

```javascript
device.keepScreenDim();
```

## device.cancelKeepingAwake()

**功能：** 取消保持屏幕常亮

```javascript
device.cancelKeepingAwake();
```

