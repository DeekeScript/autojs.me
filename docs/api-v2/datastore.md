# datastore - 本地储存

本地数据存储相关 API。

## datastore.put(key, value)

**功能：** 存储数据

```javascript
import { datastore } from '@autojs/pro'

await datastore.put("username", "admin");
await datastore.put("count", 100);
await datastore.put("data", {name: "Auto.js"});
```

## datastore.get(key, defaultValue)

**功能：** 获取存储的数据

```javascript
const username = await datastore.get("username");
const count = await datastore.get("count", 0);
const data = await datastore.get("data", {});
```

## datastore.remove(key)

**功能：** 删除存储的数据

```javascript
await datastore.remove("username");
```

## datastore.clear()

**功能：** 清空所有存储数据

```javascript
await datastore.clear();
```

## datastore.contains(key)

**功能：** 判断是否包含指定键

```javascript
const exists = await datastore.contains("username");
if (exists) {
    console.log("存在");
}
```

