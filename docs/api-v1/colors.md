# colors - 颜色

颜色处理相关 API。

## colors.toString(color)

**功能：** 将颜色值转为字符串

```javascript
var color = images.pixel(img, 100, 200);
console.log(colors.toString(color)); // #FF0000
```

## colors.red(color), colors.green(color), colors.blue(color)

**功能：** 获取颜色的RGB分量

```javascript
var color = 0xFF0000;
console.log("R:", colors.red(color));
console.log("G:", colors.green(color));
console.log("B:", colors.blue(color));
```

## colors.rgb(r, g, b)

**功能：** 将RGB值转为颜色整数

```javascript
var color = colors.rgb(255, 0, 0); // 红色
```

## colors.parseColor(colorString)

**功能：** 解析颜色字符串

```javascript
var color = colors.parseColor("#FF0000");
var color2 = colors.parseColor("red");
```

## colors.isSimilar(color1, color2, threshold)

**功能：** 判断两个颜色是否相似

```javascript
var color1 = 0xFF0000;
var color2 = 0xFF0100;
if (colors.isSimilar(color1, color2, 10)) {
    console.log("颜色相似");
}
```

## colors.rgbToHsv(r, g, b)

**功能：** RGB转HSV

```javascript
var hsv = colors.rgbToHsv(255, 0, 0);
console.log("H:", hsv[0], "S:", hsv[1], "V:", hsv[2]);
```

## colors.hsvToRgb(h, s, v)

**功能：** HSV转RGB

```javascript
var rgb = colors.hsvToRgb(0, 1, 1);
console.log("R:", rgb[0], "G:", rgb[1], "B:", rgb[2]);
```

