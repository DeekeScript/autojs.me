# timers - 定时器

定时器相关 API。

## timers.setTimeout(action, delay)

**功能：** 延迟执行

```javascript
var timer = timers.setTimeout(function() {
    console.log("5秒后执行");
}, 5000);

// 取消定时器
timers.clearTimeout(timer);
```

## timers.setInterval(action, interval)

**功能：** 定时执行

```javascript
var timer = timers.setInterval(function() {
    console.log("每秒执行一次");
}, 1000);

// 5秒后停止
setTimeout(function() {
    timers.clearInterval(timer);
}, 5000);
```

## timers.clearTimeout(timer)

**功能：** 清除延迟定时器

```javascript
timers.clearTimeout(timer);
```

## timers.clearInterval(timer)

**功能：** 清除定时定时器

```javascript
timers.clearInterval(timer);
```

## setTimeout(action, delay)

**功能：** 延迟执行（全局函数，同 timers.setTimeout）

```javascript
var timer = setTimeout(function() {
    console.log("延迟执行");
}, 1000);
```

## setInterval(action, interval)

**功能：** 定时执行（全局函数，同 timers.setInterval）

```javascript
var timer = setInterval(function() {
    console.log("定时执行");
}, 1000);
```

## clearTimeout(timer)

**功能：** 清除延迟定时器（全局函数）

```javascript
clearTimeout(timer);
```

## clearInterval(timer)

**功能：** 清除定时定时器（全局函数）

```javascript
clearInterval(timer);
```

