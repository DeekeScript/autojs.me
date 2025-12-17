# floaty - 悬浮窗

悬浮窗相关 API。

## floaty.window(layout)

**功能：** 创建悬浮窗

```javascript
var window = floaty.window(
    <frame>
        <text id="text">悬浮窗</text>
    </frame>
);

window.text.setText("Hello");
setTimeout(() => {
    window.close();
}, 5000);
```

## floaty.rawWindow(layout)

**功能：** 创建原生悬浮窗

```javascript
var window = floaty.rawWindow(
    <frame>
        <text>原生悬浮窗</text>
    </frame>
);
```

## floaty.checkPermission()

**功能：** 检查悬浮窗权限

```javascript
if (!floaty.checkPermission()) {
    floaty.requestPermission();
}
```

## floaty.requestPermission()

**功能：** 请求悬浮窗权限

```javascript
floaty.requestPermission();
```

## window.setPosition(x, y)

**功能：** 设置悬浮窗位置

```javascript
window.setPosition(100, 100);
```

## window.setSize(width, height)

**功能：** 设置悬浮窗大小

```javascript
window.setSize(300, 200);
```

## window.close()

**功能：** 关闭悬浮窗

```javascript
window.close();
```

