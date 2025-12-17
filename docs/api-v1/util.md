# util - 工具

工具函数相关 API。

## util.format(format, ...args)

**功能：** 格式化字符串

```javascript
var str = util.format("Hello %s, you are %d years old", "John", 25);
console.log(str); // Hello John, you are 25 years old
```

## util.inherits(constructor, superConstructor)

**功能：** 实现继承

```javascript
function Parent() {}
function Child() {}
util.inherits(Child, Parent);
```

## util.isArray(obj)

**功能：** 判断是否为数组

```javascript
if (util.isArray(arr)) {
    console.log("是数组");
}
```

## util.isObject(obj)

**功能：** 判断是否为对象

```javascript
if (util.isObject(obj)) {
    console.log("是对象");
}
```

