# engines - 脚本引擎

脚本引擎管理相关 API。

## engines.execScript(name, script, config)

**功能：** 在新的脚本引擎中执行脚本

```javascript
var engine = engines.execScript("后台任务", `
    while(true) {
        console.log("后台运行中");
        sleep(1000);
    }
`);
```

## engines.execScriptFile(path, config)

**功能：** 在新的脚本引擎中执行脚本文件

```javascript
var engine = engines.execScriptFile("/sdcard/script.js", {
    delay: 0,
    interval: 0,
    path: "/sdcard"
});
```

## engines.stopAll()

**功能：** 停止所有脚本引擎

```javascript
engines.stopAll();
```

## engines.myEngine()

**功能：** 获取当前脚本引擎对象

```javascript
var engine = engines.myEngine();
console.log("引擎ID：" + engine.id);
console.log("引擎标签：" + engine.tag);
```

## engines.all()

**功能：** 获取所有正在运行的脚本引擎

```javascript
var allEngines = engines.all();
allEngines.forEach(function(engine) {
    console.log("引擎：" + engine.id);
});
```

## engine.forceStop()

**功能：** 强制停止脚本引擎

```javascript
var engine = engines.execScript("test", "sleep(10000);");
sleep(2000);
engine.forceStop();
```

## engine.getTag()

**功能：** 获取引擎标签

```javascript
var tag = engine.getTag();
console.log("标签：" + tag);
```

## engine.setTag(tag)

**功能：** 设置引擎标签

```javascript
engine.setTag("我的任务");
```

