# engines - 脚本引擎

脚本引擎管理相关 API。

## engines.execScript(name, script, config)

**功能：** 在新的脚本引擎中执行脚本

```javascript
import { engines } from '@autojs/pro'

const engine = await engines.execScript("后台任务", `
    while(true) {
        console.log("后台运行中");
        await sleep(1000);
    }
`);
```

## engines.execScriptFile(path, config)

**功能：** 在新的脚本引擎中执行脚本文件

```javascript
const engine = await engines.execScriptFile("/sdcard/script.js", {
    delay: 0,
    interval: 0,
    path: "/sdcard"
});
```

## engines.stopAll()

**功能：** 停止所有脚本引擎

```javascript
await engines.stopAll();
```

## engines.myEngine()

**功能：** 获取当前脚本引擎对象

```javascript
const engine = engines.myEngine();
console.log("引擎ID：" + engine.id);
```

