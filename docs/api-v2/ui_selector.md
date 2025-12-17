# ui_selector - 无障碍选择器

无障碍选择器相关 API。

## ui_selector.text(text)

**功能：** 通过文本查找

```javascript
import { ui_selector } from '@autojs/pro'

const btn = await ui_selector.text("确定").findOne();
await btn.click();
```

## ui_selector.id(id)

**功能：** 通过ID查找

```javascript
const btn = await ui_selector.id("btn_ok").findOne();
await btn.click();
```

## ui_selector.className(className)

**功能：** 通过类名查找

```javascript
const btn = await ui_selector.className("android.widget.Button").findOne();
await btn.click();
```

## ui_selector.desc(desc)

**功能：** 通过描述查找

```javascript
const btn = await ui_selector.desc("确定按钮").findOne();
await btn.click();
```

## ui_selector.findOne(timeout)

**功能：** 查找一个控件

```javascript
const btn = await ui_selector.text("确定").findOne(5000);
```

## ui_selector.find()

**功能：** 查找所有符合条件的控件

```javascript
const buttons = await ui_selector.textContains("按钮").find();
for (const btn of buttons) {
    await btn.click();
}
```

