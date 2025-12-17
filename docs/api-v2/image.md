# image - 图片处理

图片处理相关 API。

## image.captureScreen()

**功能：** 截取当前屏幕

```javascript
import { image } from '@autojs/pro'

const img = await image.captureScreen();
await image.save(img, "/sdcard/screenshot.png");
```

## image.findImage(img, template)

**功能：** 在图片中查找模板图片

```javascript
const img = await image.captureScreen();
const template = await image.read("/sdcard/template.png");
const point = await image.findImage(img, template);
if (point) {
    await click(point.x, point.y);
}
```

## image.findColor(img, color, options)

**功能：** 在图片中查找颜色

```javascript
const img = await image.captureScreen();
const point = await image.findColor(img, "#ff0000");
if (point) {
    await click(point.x, point.y);
}
```

## image.read(path)

**功能：** 读取图片文件

```javascript
const img = await image.read("/sdcard/image.jpg");
```

## image.save(img, path)

**功能：** 保存图片到文件

```javascript
const img = await image.captureScreen();
await image.save(img, "/sdcard/screenshot.png");
```

