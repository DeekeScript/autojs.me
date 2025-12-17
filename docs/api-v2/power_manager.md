# power_manager - 电池管理

电池管理相关 API。

## power_manager.wakeUp()

**功能：** 唤醒设备

```javascript
import { power_manager } from '@autojs/pro'

await power_manager.wakeUp();
```

## power_manager.isScreenOn()

**功能：** 判断屏幕是否点亮

```javascript
const isOn = await power_manager.isScreenOn();
if (!isOn) {
    await power_manager.wakeUp();
}
```

## power_manager.keepScreenOn()

**功能：** 保持屏幕常亮

```javascript
await power_manager.keepScreenOn();
```

