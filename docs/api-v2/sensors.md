# sensors - 传感器

传感器相关 API。

## sensors.register(eventName, delay, listener)

**功能：** 注册传感器监听

```javascript
import { sensors } from '@autojs/pro'

const listener = await sensors.register("accelerometer", sensors.delay.ui, (event) => {
    console.log("加速度：", event.values);
});
```

## sensors.unregister(listener)

**功能：** 取消传感器监听

```javascript
await sensors.unregister(listener);
```

