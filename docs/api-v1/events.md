# events - 事件与监听

事件与监听相关 API。

## events.on(eventName, listener)

**功能：** 监听事件

```javascript
events.on("key", function(keyCode, event) {
    console.log("按键：" + keyCode);
});

events.on("toast", function(text) {
    console.log("Toast：" + text);
});
```

## events.once(eventName, listener)

**功能：** 监听事件一次

```javascript
events.once("exit", function() {
    console.log("脚本即将退出");
});
```

## events.removeAllListeners(eventName)

**功能：** 移除所有事件监听器

```javascript
events.removeAllListeners("key");
```

## events.emit(eventName, ...args)

**功能：** 触发事件

```javascript
events.emit("custom_event", "参数1", "参数2");
```

## events.observeToast()

**功能：** 监听 Toast 消息

```javascript
events.observeToast();
events.on("toast", function(text) {
    console.log("Toast消息：" + text);
});
```

## events.observeNotification()

**功能：** 监听通知

```javascript
events.observeNotification();
events.on("notification", function(notification) {
    console.log("通知：" + notification.getText());
});
```

## events.set(eventName, listener)

**功能：** 设置事件监听器（同 events.on）

```javascript
events.set("key", function(keyCode, event) {
    console.log("按键：" + keyCode);
});
```

