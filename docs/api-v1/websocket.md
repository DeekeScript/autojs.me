# WebSocket

WebSocket 相关 API。

## WebSocket 客户端

建立 WebSocket 连接：

```javascript
const WebSocket = require('ws');
const ws = new WebSocket('ws://example.com');

ws.on('open', function() {
    console.log('连接已建立');
    ws.send('Hello Server');
});

ws.on('message', function(data) {
    console.log('收到消息:', data);
});

ws.on('close', function() {
    console.log('连接已关闭');
});

ws.on('error', function(error) {
    console.error('错误:', error);
});
```

## WebSocket 服务器

创建 WebSocket 服务器：

```javascript
const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', function(ws) {
    ws.on('message', function(message) {
        console.log('收到消息:', message);
        ws.send('收到: ' + message);
    });
});
```

