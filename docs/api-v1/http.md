# http - HTTP网络请求

HTTP 网络请求相关 API。

## http.get(url, options)

**功能：** 发送 GET 请求

```javascript
var response = http.get("https://api.example.com/data");
console.log(response.body.string());
```

## http.post(url, data, options)

**功能：** 发送 POST 请求

```javascript
var response = http.post("https://api.example.com/data", {
    key: "value"
});
console.log(response.body.string());
```

## http.postJson(url, data, options)

**功能：** 发送JSON格式的POST请求

```javascript
var response = http.postJson("https://api.example.com/data", {
    name: "Auto.js",
    version: "4.1.1"
});
console.log(response.body.json());
```

## http.postMultipart(url, files, options)

**功能：** 发送multipart请求（文件上传）

```javascript
var response = http.postMultipart("https://api.example.com/upload", {
    file: open("/sdcard/image.jpg"),
    name: "image"
});
```

## http.request(url, options)

**功能：** 发送自定义请求

```javascript
var response = http.request("https://api.example.com/data", {
    method: "PUT",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({key: "value"})
});
```

## Response 对象

响应对象的方法和属性：

- **statusCode** - HTTP状态码
- **statusMessage** - 状态消息
- **headers** - 响应头对象
- **body** - 响应体对象
- **body.string()** - 获取字符串内容
- **body.bytes()** - 获取字节数组
- **body.json()** - 解析为JSON对象
- **body.contentType** - 内容类型

```javascript
var response = http.get("https://api.example.com/data");
console.log("状态码：" + response.statusCode);
console.log("内容：" + response.body.string());
```

