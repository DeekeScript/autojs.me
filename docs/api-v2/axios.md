# axios - http请求

HTTP 网络请求相关 API，基于 axios。

## 安装

```bash
npm install axios
```

## 使用

```javascript
import axios from 'axios'

// GET 请求
const response = await axios.get("https://api.example.com/data");
console.log(response.data);

// POST 请求
const response = await axios.post("https://api.example.com/data", {
    key: "value"
});

// 自定义配置
const response = await axios({
    method: 'get',
    url: 'https://api.example.com/data',
    headers: {
        'Authorization': 'Bearer token'
    }
});
```

## 请求配置

```javascript
const response = await axios.get("https://api.example.com/data", {
    params: {
        id: 123
    },
    headers: {
        'Content-Type': 'application/json'
    },
    timeout: 5000
});
```

## 响应处理

```javascript
try {
    const response = await axios.get("https://api.example.com/data");
    console.log(response.status);
    console.log(response.data);
    console.log(response.headers);
} catch (error) {
    console.error(error.message);
}
```

