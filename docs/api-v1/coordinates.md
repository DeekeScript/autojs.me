# 自动化 - 坐标操作

通过屏幕坐标进行自动化操作，适合无法通过控件查找的场景。

## click(x, y)

**功能：** 点击屏幕坐标

```javascript
click(500, 1000);
// 点击屏幕中心
click(device.width / 2, device.height / 2);
```

## longClick(x, y, duration)

**功能：** 长按屏幕坐标

```javascript
longClick(500, 1000);
longClick(500, 1000, 2000); // 长按2秒
```

## swipe(x1, y1, x2, y2, duration)

**功能：** 滑动操作

```javascript
swipe(500, 1000, 500, 500, 500); // 向上滑动
swipe(100, 500, 900, 500, 500); // 向右滑动
```

## gesture(duration, points)

**功能：** 执行手势操作

```javascript
gesture(1000, [0, 0], [500, 500], [1000, 1000]);
```

## coordinates.setScreenMetrics(width, height)

**功能：** 设置屏幕分辨率（用于坐标转换）

```javascript
coordinates.setScreenMetrics(1080, 1920);
// 之后所有坐标都会根据这个分辨率进行转换
```

