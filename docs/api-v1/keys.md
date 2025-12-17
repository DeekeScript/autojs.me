# keys - 按键模拟

按键模拟相关 API。

## KeyCode 常量

常用的按键码：

```javascript
// 系统按键
keys.KEYCODE_HOME        // Home键
keys.KEYCODE_BACK        // 返回键
keys.KEYCODE_MENU       // 菜单键
keys.KEYCODE_VOLUME_UP  // 音量加
keys.KEYCODE_VOLUME_DOWN // 音量减
keys.KEYCODE_POWER      // 电源键

// 数字键
keys.KEYCODE_0          // 0
keys.KEYCODE_1          // 1
keys.KEYCODE_9          // 9

// 字母键
keys.KEYCODE_A          // A
keys.KEYCODE_Z          // Z

// 功能键
keys.KEYCODE_ENTER      // 回车
keys.KEYCODE_DEL        // 删除
keys.KEYCODE_SPACE      // 空格
keys.KEYCODE_TAB        // Tab
```

## keys.key(keyCode)

**功能：** 按下并释放按键

```javascript
keys.key(keys.KEYCODE_HOME);
keys.key(keys.KEYCODE_BACK);
keys.key(keys.KEYCODE_ENTER);
```

## keys.keyDown(keyCode)

**功能：** 按下按键（不释放）

```javascript
keys.keyDown(keys.KEYCODE_SHIFT_LEFT);
keys.key(keys.KEYCODE_A); // 按下Shift+A
keys.keyUp(keys.KEYCODE_SHIFT_LEFT);
```

## keys.keyUp(keyCode)

**功能：** 释放按键

```javascript
keys.keyUp(keys.KEYCODE_SHIFT_LEFT);
```

## keys.press(keyCode, duration)

**功能：** 按下按键并保持指定时间

```javascript
keys.press(keys.KEYCODE_HOME, 1000); // 按下Home键1秒
```

## keys.longPress(keyCode, duration)

**功能：** 长按按键

```javascript
keys.longPress(keys.KEYCODE_HOME, 2000); // 长按Home键2秒
```

## keys.back()

**功能：** 按下返回键

```javascript
keys.back();
```

## keys.home()

**功能：** 按下Home键

```javascript
keys.home();
```

## keys.recentApps()

**功能：** 打开最近任务

```javascript
keys.recentApps();
```

## keys.notifications()

**功能：** 打开通知栏

```javascript
keys.notifications();
```

## keys.quickSettings()

**功能：** 打开快速设置

```javascript
keys.quickSettings();
```

## keys.powerDialog()

**功能：** 打开电源对话框

```javascript
keys.powerDialog();
```

## keys.splitScreen()

**功能：** 分屏

```javascript
keys.splitScreen();
```

## keys.text(text)

**功能：** 输入文本

```javascript
keys.text("Hello World");
keys.text("中文输入");
```

## keys.codePoint(codePoint)

**功能：** 输入Unicode字符

```javascript
keys.codePoint(0x4E2D); // 输入"中"
```

## keys.setKeyEventDelay(delay)

**功能：** 设置按键事件延迟（毫秒）

```javascript
keys.setKeyEventDelay(50); // 设置延迟50毫秒
```

## keys.setKeyEventDelay(0)

**功能：** 取消按键事件延迟

```javascript
keys.setKeyEventDelay(0);
```

