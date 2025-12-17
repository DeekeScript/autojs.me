# globals - 全局变量与函数

全局函数和变量。

## sleep(millis)

**功能：** 暂停脚本执行指定的毫秒数

**参数：** millis - 暂停的毫秒数

```javascript
sleep(1000); // 暂停 1 秒
sleep(500);  // 暂停 0.5 秒
```

## toast(message)

**功能：** 显示一个消息提示框

**参数：** message - 要显示的消息文本

```javascript
toast("操作完成");
toast("错误：" + error);
```

## toastLog(message)

**功能：** 显示消息并同时输出到控制台

```javascript
toastLog("调试信息");
```

## exit()

**功能：** 退出脚本

```javascript
exit();
```

## random(min, max)

**功能：** 生成随机数

```javascript
var num = random(1, 100);
console.log(num);
```

