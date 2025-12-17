# clip_manager - 剪贴板

剪贴板管理相关 API。

## clip_manager.getText()

**功能：** 获取剪贴板文本

```javascript
import { clip_manager } from '@autojs/pro'

const text = await clip_manager.getText();
console.log("剪贴板内容：" + text);
```

## clip_manager.setText(text)

**功能：** 设置剪贴板文本

```javascript
await clip_manager.setText("Hello World");
```

## clip_manager.clear()

**功能：** 清空剪贴板

```javascript
await clip_manager.clear();
```

