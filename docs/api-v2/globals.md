# globals - 全局函数与变量

全局函数和变量。

## sleep(millis)

**功能：** 暂停脚本执行指定的毫秒数

```javascript
await sleep(1000); // 暂停 1 秒
await sleep(500);  // 暂停 0.5 秒
```

## toast(message)

**功能：** 显示一个消息提示框

```javascript
import { toast } from '@autojs/pro'

await toast("操作完成");
await toast("错误：" + error);
```

## exit()

**功能：** 退出脚本

```javascript
exit();
```

## random(min, max)

**功能：** 生成随机数

```javascript
const num = random(1, 100);
console.log(num);
```

