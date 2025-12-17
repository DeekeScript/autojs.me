# module - 模块

模块系统相关 API。

## module.exports

**功能：** 导出模块

```javascript
// utils.js
function add(a, b) {
    return a + b;
}

module.exports = {
    add: add
};

// main.js
const utils = require('./utils');
var result = utils.add(1, 2);
```

## require(path)

**功能：** 导入模块

```javascript
const utils = require('./utils');
const http = require('http');
```

## module.exports.functionName

**功能：** 导出指定函数

```javascript
// utils.js
function add(a, b) {
    return a + b;
}

module.exports.add = add;

// main.js
const utils = require('./utils');
var result = utils.add(1, 2);
```

