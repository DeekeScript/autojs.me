# images - 图片处理

图片处理相关 API。

## captureScreen()

**功能：** 截取当前屏幕

```javascript
var img = captureScreen();
images.save(img, "/sdcard/screenshot.png");
```

## images.findImage(img, template)

**功能：** 在图片中查找模板图片

```javascript
var img = captureScreen();
var template = images.read("/sdcard/template.png");
var point = images.findImage(img, template);
if (point) {
    click(point.x, point.y);
}
```

## images.findColor(img, color, options)

**功能：** 在图片中查找颜色

```javascript
var img = captureScreen();
var point = images.findColor(img, "#ff0000");
if (point) {
    click(point.x, point.y);
}
```

## images.pixel(img, x, y)

**功能：** 获取图片指定位置的颜色值

```javascript
var img = captureScreen();
var color = images.pixel(img, 100, 200);
console.log("颜色值：" + colors.toString(color));
```

## images.clip(img, x, y, w, h)

**功能：** 裁剪图片

```javascript
var img = captureScreen();
var clipped = images.clip(img, 0, 0, 500, 500);
images.save(clipped, "/sdcard/clipped.png");
```

## images.resize(img, size, interpolation)

**功能：** 调整图片大小

```javascript
var img = images.read("/sdcard/image.jpg");
var resized = images.resize(img, [800, 600]);
images.save(resized, "/sdcard/resized.jpg");
```

## images.grayscale(img)

**功能：** 将图片转为灰度图

```javascript
var img = images.read("/sdcard/image.jpg");
var gray = images.grayscale(img);
images.save(gray, "/sdcard/gray.jpg");
```

## images.threshold(img, threshold)

**功能：** 二值化图片

```javascript
var img = images.read("/sdcard/image.jpg");
var binary = images.threshold(img, 128);
images.save(binary, "/sdcard/binary.jpg");
```

## images.invert(img)

**功能：** 反色图片

```javascript
var img = images.read("/sdcard/image.jpg");
var inverted = images.invert(img);
images.save(inverted, "/sdcard/inverted.jpg");
```

## images.concat(img1, img2, direction)

**功能：** 拼接图片

```javascript
var img1 = images.read("/sdcard/image1.jpg");
var img2 = images.read("/sdcard/image2.jpg");
var concat = images.concat(img1, img2, "horizontal");
images.save(concat, "/sdcard/concat.jpg");
```

## images.toBase64(img, format, quality)

**功能：** 将图片转为Base64字符串

```javascript
var img = images.read("/sdcard/image.jpg");
var base64 = images.toBase64(img, "png", 100);
console.log(base64);
```

## images.fromBase64(base64)

**功能：** 从Base64字符串创建图片

```javascript
var img = images.fromBase64(base64String);
images.save(img, "/sdcard/from_base64.png");
```

## images.read(path)

**功能：** 读取图片文件

```javascript
var img = images.read("/sdcard/image.jpg");
```

## images.load(url)

**功能：** 从网络加载图片

```javascript
var img = images.load("https://example.com/image.jpg");
```

## images.save(img, path)

**功能：** 保存图片到文件

```javascript
var img = captureScreen();
images.save(img, "/sdcard/screenshot.png");
```

## images.recycle(img)

**功能：** 回收图片资源

```javascript
var img = images.read("/sdcard/image.jpg");
// 使用图片...
images.recycle(img); // 释放内存
```

## images.getPixel(img, x, y)

**功能：** 获取像素颜色（同 images.pixel）

```javascript
var color = images.getPixel(img, 100, 200);
```

## images.findColor(img, color, options)

**功能：** 查找颜色（支持区域和阈值）

```javascript
var img = captureScreen();
var point = images.findColor(img, "#ff0000", {
    region: [0, 0, 500, 500],
    threshold: 10
});
```

