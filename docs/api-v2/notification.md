# notification - 通知

通知相关 API。

## notification.notify(id, title, content)

**功能：** 显示通知

```javascript
import { notification } from '@autojs/pro'

await notification.notify(1, "标题", "内容");
```

## notification.cancel(id)

**功能：** 取消通知

```javascript
await notification.cancel(1);
```

## notification.cancelAll()

**功能：** 取消所有通知

```javascript
await notification.cancelAll();
```

