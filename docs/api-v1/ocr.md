# ocr - 文字识别

OCR 文字识别相关 API。

## ocr.recognize(img)

**功能：** 识别图片中的文字

```javascript
var img = captureScreen();
var result = ocr.recognize(img);
console.log(result.text);
```

## ocr.recognizeText(img)

**功能：** 识别文字并返回文本

```javascript
var img = captureScreen();
var text = ocr.recognizeText(img);
console.log(text);
```

## paddle.ocr(img)

**功能：** 使用 PaddleOCR 识别文字

```javascript
var img = captureScreen();
var result = paddle.ocr(img);
console.log(result);
```

