# power_manager - 电源管理

电源管理相关 API。

## power_manager.wakeUp()

**功能：** 唤醒设备

```javascript
power_manager.wakeUp();
```

## power_manager.wakeUpIfNeeded()

**功能：** 如果需要则唤醒设备

```javascript
power_manager.wakeUpIfNeeded();
```

## power_manager.isScreenOn()

**功能：** 判断屏幕是否点亮

```javascript
if (!power_manager.isScreenOn()) {
    power_manager.wakeUp();
}
```

## power_manager.keepScreenOn()

**功能：** 保持屏幕常亮

```javascript
power_manager.keepScreenOn();
```

## power_manager.keepScreenDim()

**功能：** 保持屏幕微亮

```javascript
power_manager.keepScreenDim();
```

## power_manager.cancelKeepingAwake()

**功能：** 取消保持屏幕常亮

```javascript
power_manager.cancelKeepingAwake();
```

