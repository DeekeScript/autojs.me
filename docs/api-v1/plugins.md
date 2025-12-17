# plugins - 插件

插件管理相关 API。

## plugins.load(name)

**功能：** 加载插件

```javascript
var plugin = plugins.load("myPlugin");
plugin.doSomething();
```

## plugins.list()

**功能：** 列出所有已安装的插件

```javascript
var list = plugins.list();
list.forEach(function(plugin) {
    console.log(plugin.name);
});
```

