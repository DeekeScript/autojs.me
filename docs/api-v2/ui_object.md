# ui_object - 无障碍对象

无障碍对象相关 API。

## ui_object.click()

**功能：** 点击无障碍对象

```javascript
import { ui_object } from '@autojs/pro'

const obj = await ui_object.findById("btn_ok");
await obj.click();
```

## ui_object.longClick()

**功能：** 长按无障碍对象

```javascript
await obj.longClick();
```

## ui_object.getText()

**功能：** 获取对象文本

```javascript
const text = await obj.getText();
console.log("文本：" + text);
```

## ui_object.getDesc()

**功能：** 获取对象描述

```javascript
const desc = await obj.getDesc();
console.log("描述：" + desc);
```

