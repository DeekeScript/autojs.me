# accessibility - 无障碍

无障碍服务相关 API。

## accessibility.enable()

**功能：** 启用无障碍服务

```javascript
import { accessibility } from '@autojs/pro'

await accessibility.enable();
```

## accessibility.disable()

**功能：** 禁用无障碍服务

```javascript
await accessibility.disable();
```

## accessibility.isEnabled()

**功能：** 检查无障碍服务是否启用

```javascript
const isEnabled = await accessibility.isEnabled();
if (!isEnabled) {
    await accessibility.enable();
}
```

