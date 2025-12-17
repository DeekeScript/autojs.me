# settings - 设置

设置相关 API。

## settings.put(key, value)

**功能：** 保存设置

```javascript
settings.put("username", "admin");
settings.put("count", 100);
```

## settings.get(key, defaultValue)

**功能：** 获取设置

```javascript
var username = settings.get("username");
var count = settings.get("count", 0);
```

## settings.remove(key)

**功能：** 删除设置

```javascript
settings.remove("username");
```

## settings.clear()

**功能：** 清空所有设置

```javascript
settings.clear();
```

## settings.contains(key)

**功能：** 判断是否包含指定键

```javascript
if (settings.contains("username")) {
    console.log("存在");
}
```

