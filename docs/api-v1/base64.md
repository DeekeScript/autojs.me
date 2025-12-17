# base64

Base64 编码和解码相关 API。

## base64.encode(data)

**功能：** Base64编码

```javascript
var encoded = base64.encode("Hello World");
console.log(encoded); // SGVsbG8gV29ybGQ=
```

## base64.decode(data)

**功能：** Base64解码

```javascript
var decoded = base64.decode("SGVsbG8gV29ybGQ=");
console.log(decoded); // Hello World
```

