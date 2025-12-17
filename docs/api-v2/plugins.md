# plugins - 插件

插件管理相关 API。

## plugins.load(name)

**功能：** 加载插件

```javascript
import { plugins } from '@autojs/pro'

const plugin = await plugins.load("myPlugin");
await plugin.doSomething();
```

## plugins.list()

**功能：** 列出所有已安装的插件

```javascript
const list = await plugins.list();
list.forEach(plugin => {
    console.log(plugin.name);
});
```

