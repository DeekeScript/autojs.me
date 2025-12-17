# console - 控制台

控制台输出相关 API。

## console.log(...args)

**功能：** 输出日志

```javascript
console.log("普通日志");
console.log("变量值：", variable);
console.log("对象：", {name: "Auto.js"});
```

## console.verbose(...args)

**功能：** 输出详细日志

```javascript
console.verbose("详细日志");
```

## console.info(...args)

**功能：** 输出信息日志

```javascript
console.info("信息日志");
```

## console.warn(...args)

**功能：** 输出警告日志

```javascript
console.warn("警告信息");
```

## console.error(...args)

**功能：** 输出错误日志

```javascript
console.error("错误信息");
```

## console.trace(...args)

**功能：** 输出堆栈跟踪

```javascript
console.trace("堆栈跟踪");
```

## console.assert(condition, message)

**功能：** 断言

```javascript
console.assert(x > 0, "x必须大于0");
```

## console.time(label)

**功能：** 开始计时

```javascript
console.time("操作");
// 执行操作...
console.timeEnd("操作");
```

## console.timeEnd(label)

**功能：** 结束计时并输出耗时

```javascript
console.time("操作");
sleep(1000);
console.timeEnd("操作"); // 输出: 操作: 1000ms
```

## console.clear()

**功能：** 清空控制台

```javascript
console.clear();
```

## console.show()

**功能：** 显示控制台

```javascript
console.show();
```

## console.hide()

**功能：** 隐藏控制台

```javascript
console.hide();
```

## console.setGlobalLogConfig(config)

**功能：** 设置全局日志配置

```javascript
console.setGlobalLogConfig({
    level: "INFO",
    file: "/sdcard/log.txt"
});
```

