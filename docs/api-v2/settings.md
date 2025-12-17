# settings - 设置

设置相关 API。

## settings.put(key, value)

**功能：** 保存设置

```javascript
import { settings } from '@autojs/pro'

await settings.put("username", "admin");
await settings.put("count", 100);
```

## settings.get(key, defaultValue)

**功能：** 获取设置

```javascript
const username = await settings.get("username");
const count = await settings.get("count", 0);
```

## settings.remove(key)

**功能：** 删除设置

```javascript
await settings.remove("username");
```

