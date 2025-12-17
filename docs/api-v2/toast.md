# toast - Toast

Toast 消息提示相关 API。

## toast.show(message, duration)

**功能：** 显示Toast消息

```javascript
import { toast } from '@autojs/pro'

await toast.show("操作完成");
await toast.show("错误信息", toast.LENGTH_LONG);
```

## toast.LENGTH_SHORT

**功能：** 短时间显示常量

```javascript
await toast.show("短消息", toast.LENGTH_SHORT);
```

## toast.LENGTH_LONG

**功能：** 长时间显示常量

```javascript
await toast.show("长消息", toast.LENGTH_LONG);
```

