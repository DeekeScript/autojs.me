# color - 颜色

颜色处理相关 API。

## color.toString(color)

**功能：** 将颜色值转为字符串

```javascript
import { color } from '@autojs/pro'

const colorValue = 0xFF0000;
const str = color.toString(colorValue);
console.log(str); // #FF0000
```

## color.red(color), color.green(color), color.blue(color)

**功能：** 获取颜色的RGB分量

```javascript
const colorValue = 0xFF0000;
console.log("R:", color.red(colorValue));
console.log("G:", color.green(colorValue));
console.log("B:", color.blue(colorValue));
```

## color.rgb(r, g, b)

**功能：** 将RGB值转为颜色整数

```javascript
const colorValue = color.rgb(255, 0, 0); // 红色
```

## color.parseColor(colorString)

**功能：** 解析颜色字符串

```javascript
const colorValue = color.parseColor("#FF0000");
const colorValue2 = color.parseColor("red");
```

