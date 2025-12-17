# floating_window - 悬浮窗

悬浮窗相关 API。

## floating_window.create(layout)

**功能：** 创建悬浮窗

```javascript
import { floating_window } from '@autojs/pro'

const window = await floating_window.create(
    <frame>
        <text id="text">悬浮窗</text>
    </frame>
);

window.text.setText("Hello");
setTimeout(() => {
    window.close();
}, 5000);
```

## floating_window.checkPermission()

**功能：** 检查悬浮窗权限

```javascript
const hasPermission = await floating_window.checkPermission();
if (!hasPermission) {
    await floating_window.requestPermission();
}
```

## floating_window.requestPermission()

**功能：** 请求悬浮窗权限

```javascript
await floating_window.requestPermission();
```

