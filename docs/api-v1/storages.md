# storages - 本地存储

本地数据存储相关 API。

## storage.put(key, value)

**功能：** 存储数据

```javascript
storage.put("username", "admin");
storage.put("count", 100);
storage.put("data", {name: "Auto.js"});
```

## storage.get(key, defaultValue)

**功能：** 获取存储的数据

```javascript
var username = storage.get("username");
var count = storage.get("count", 0);
var data = storage.get("data", {});
```

## storage.remove(key)

**功能：** 删除存储的数据

```javascript
storage.remove("username");
```

## storage.clear()

**功能：** 清空所有存储数据

```javascript
storage.clear();
```

## storage.contains(key)

**功能：** 判断是否包含指定键

```javascript
if (storage.contains("username")) {
    console.log("存在");
}
```

## storage.length

**功能：** 获取存储项数量

```javascript
console.log("存储项数量：" + storage.length);
```

## storage.keys()

**功能：** 获取所有键

```javascript
var keys = storage.keys();
keys.forEach(function(key) {
    console.log(key);
});
```

## storage.values()

**功能：** 获取所有值

```javascript
var values = storage.values();
values.forEach(function(value) {
    console.log(value);
});
```

## storage.entries()

**功能：** 获取所有键值对

```javascript
var entries = storage.entries();
entries.forEach(function(entry) {
    console.log(entry.key + " = " + entry.value);
});
```

