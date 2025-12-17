# canvas - 画布

画布绘制相关 API。

## canvas.new(width, height)

**功能：** 创建新的画布

```javascript
var canvas = canvas.new(800, 600);
```

## canvas.fromImage(img)

**功能：** 从图片创建画布

```javascript
var img = images.read("/sdcard/image.jpg");
var canvas = canvas.fromImage(img);
```

## canvas.toImage()

**功能：** 将画布转为图片

```javascript
var img = canvas.toImage();
images.save(img, "/sdcard/canvas.png");
```

## canvas.drawColor(color)

**功能：** 绘制颜色

```javascript
canvas.drawColor(colors.parseColor("#FF0000"));
```

## canvas.drawLine(x1, y1, x2, y2, paint)

**功能：** 绘制直线

```javascript
var paint = new Paint();
paint.setColor(colors.parseColor("#000000"));
paint.setStrokeWidth(5);
canvas.drawLine(0, 0, 100, 100, paint);
```

## canvas.drawRect(left, top, right, bottom, paint)

**功能：** 绘制矩形

```javascript
var paint = new Paint();
paint.setColor(colors.parseColor("#FF0000"));
paint.setStyle(Paint.Style.STROKE);
canvas.drawRect(10, 10, 100, 100, paint);
```

## canvas.drawCircle(cx, cy, radius, paint)

**功能：** 绘制圆形

```javascript
var paint = new Paint();
paint.setColor(colors.parseColor("#0000FF"));
canvas.drawCircle(100, 100, 50, paint);
```

## canvas.drawText(text, x, y, paint)

**功能：** 绘制文本

```javascript
var paint = new Paint();
paint.setColor(colors.parseColor("#000000"));
paint.setTextSize(30);
canvas.drawText("Hello World", 10, 50, paint);
```

## canvas.drawBitmap(bitmap, left, top, paint)

**功能：** 绘制位图

```javascript
var bitmap = images.read("/sdcard/image.jpg");
canvas.drawBitmap(bitmap, 0, 0, null);
```

## canvas.save()

**功能：** 保存画布状态

```javascript
canvas.save();
// 进行变换...
canvas.restore();
```

## canvas.restore()

**功能：** 恢复画布状态

```javascript
canvas.restore();
```

## canvas.translate(dx, dy)

**功能：** 平移画布

```javascript
canvas.translate(100, 100);
```

## canvas.rotate(degrees)

**功能：** 旋转画布

```javascript
canvas.rotate(45);
```

## canvas.scale(sx, sy)

**功能：** 缩放画布

```javascript
canvas.scale(2, 2);
```

## Paint 对象

创建和使用 Paint 对象：

```javascript
var paint = new Paint();
paint.setColor(colors.parseColor("#FF0000"));
paint.setStrokeWidth(5);
paint.setStyle(Paint.Style.STROKE);
paint.setTextSize(30);
paint.setAntiAlias(true);
```

