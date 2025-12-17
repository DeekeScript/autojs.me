# thirdPartyPlugins - 第三方插件

第三方插件相关 API。

## plugins.load(name)

**功能：** 加载第三方插件

```javascript
var plugin = plugins.load("myPlugin");
plugin.doSomething();
```

## plugins.list()

**功能：** 列出所有已安装的第三方插件

```javascript
var list = plugins.list();
list.forEach(function(plugin) {
    console.log("插件名称：" + plugin.name);
    console.log("插件版本：" + plugin.version);
});
```

## plugins.install(path)

**功能：** 安装第三方插件

```javascript
plugins.install("/sdcard/plugin.apk");
```

## plugins.uninstall(name)

**功能：** 卸载第三方插件

```javascript
plugins.uninstall("myPlugin");
```

## plugins.enable(name)

**功能：** 启用插件

```javascript
plugins.enable("myPlugin");
```

## plugins.disable(name)

**功能：** 禁用插件

```javascript
plugins.disable("myPlugin");
```

## plugins.isEnabled(name)

**功能：** 检查插件是否启用

```javascript
if (plugins.isEnabled("myPlugin")) {
    console.log("插件已启用");
}
```

## 插件开发

开发自定义插件需要：

1. 创建插件项目
2. 实现插件接口
3. 打包为插件文件
4. 安装到 Auto.js Pro

插件示例：

```javascript
// 插件入口文件
module.exports = {
    name: "myPlugin",
    version: "1.0.0",
    author: "Your Name",
    description: "插件描述",
    
    // 插件初始化
    init: function() {
        console.log("插件初始化");
    },
    
    // 插件方法
    doSomething: function() {
        console.log("执行插件功能");
    }
};
```

