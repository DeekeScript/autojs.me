# rhino - 犀牛Java交互

Rhino Java 交互相关 API。

## rhino.type(className)

**功能：** 获取Java类

```javascript
import { rhino } from '@autojs/pro'

const String = rhino.type("java.lang.String");
const ArrayList = rhino.type("java.util.ArrayList");
const list = new ArrayList();
```

## rhino.use(className)

**功能：** 使用Java类

```javascript
const String = rhino.use("java.lang.String");
const str = String.$new("Hello");
```

## rhino.scheduleOnMainThread(fn)

**功能：** 在主线程执行函数

```javascript
await rhino.scheduleOnMainThread(() => {
    toast("在主线程执行");
});
```

