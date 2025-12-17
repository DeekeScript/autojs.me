# @autojs/opencv - OpenCV

OpenCV 图像处理相关 API。

## 安装

```bash
npm install @autojs/opencv
```

## 使用

```javascript
import cv from '@autojs/opencv'

// 读取图片
const img = await cv.imread("/sdcard/image.jpg");

// 转换为灰度图
const gray = await cv.cvtColor(img, cv.COLOR_BGR2GRAY);

// 保存图片
await cv.imwrite("/sdcard/gray.jpg", gray);
```

## 常用功能

### 图像处理

```javascript
// 缩放
const resized = await cv.resize(img, { width: 800, height: 600 });

// 旋转
const rotated = await cv.rotate(img, cv.ROTATE_90_CLOCKWISE);

// 裁剪
const cropped = await cv.crop(img, { x: 0, y: 0, width: 100, height: 100 });
```

### 特征检测

```javascript
// 边缘检测
const edges = await cv.Canny(img, 100, 200);

// 轮廓检测
const contours = await cv.findContours(edges, cv.RETR_EXTERNAL, cv.CHAIN_APPROX_SIMPLE);
```

