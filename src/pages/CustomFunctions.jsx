import './Page.css'

function CustomFunctions() {
  return (
    <div className="page">
      <div className="container">
        <h1>自定义函数</h1>
        
        <section className="page-section">
          <h2>概述</h2>
          <p>Auto.js Pro 支持自定义函数，允许你创建可重用的代码模块，提高代码的可维护性和复用性。</p>
        </section>

        <section className="page-section">
          <h2>定义自定义函数</h2>
          
          <div className="api-item">
            <h3>基本函数定义</h3>
            <pre className="code-block">
{`function myFunction(param1, param2) {
    // 函数体
    return param1 + param2;
}

// 调用函数
var result = myFunction(1, 2);
console.log(result); // 输出: 3`}
            </pre>
          </div>

          <div className="api-item">
            <h3>箭头函数</h3>
            <pre className="code-block">
{`const add = (a, b) => {
    return a + b;
};

// 简写形式
const multiply = (a, b) => a * b;`}
            </pre>
          </div>

          <div className="api-item">
            <h3>异步函数</h3>
            <pre className="code-block">
{`async function fetchData(url) {
    const response = await http.get(url);
    return response.body.string();
}

// 使用
fetchData('https://api.example.com/data')
    .then(data => console.log(data));`}
            </pre>
          </div>
        </section>

        <section className="page-section">
          <h2>模块化组织</h2>
          
          <div className="api-item">
            <h3>创建模块文件</h3>
            <p>创建 utils.js 文件：</p>
            <pre className="code-block">
{`// utils.js
function formatDate(date) {
    return date.toLocaleDateString('zh-CN');
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

module.exports = {
    formatDate,
    sleep
};`}
            </pre>
          </div>

          <div className="api-item">
            <h3>导入模块</h3>
            <pre className="code-block">
{`// main.js
const utils = require('./utils');

var today = new Date();
console.log(utils.formatDate(today));

await utils.sleep(1000);`}
            </pre>
          </div>
        </section>

        <section className="page-section">
          <h2>常用自定义函数示例</h2>
          
          <div className="api-item">
            <h3>安全的点击函数</h3>
            <pre className="code-block">
{`function safeClick(selector, timeout = 5000) {
    try {
        var element = selector.findOne(timeout);
        if (element) {
            element.click();
            return true;
        }
    } catch (e) {
        console.error('点击失败:', e);
    }
    return false;
}

// 使用
safeClick(text("确定"));`}
            </pre>
          </div>

          <div className="api-item">
            <h3>等待元素出现</h3>
            <pre className="code-block">
{`function waitForElement(selector, timeout = 10000) {
    const startTime = Date.now();
    while (Date.now() - startTime < timeout) {
        try {
            var element = selector.findOne(1000);
            if (element) {
                return element;
            }
        } catch (e) {
            // 继续等待
        }
    }
    return null;
}

// 使用
var btn = waitForElement(text("登录"));
if (btn) {
    btn.click();
}`}
            </pre>
          </div>

          <div className="api-item">
            <h3>重试机制</h3>
            <pre className="code-block">
{`async function retry(fn, maxRetries = 3, delay = 1000) {
    for (let i = 0; i < maxRetries; i++) {
        try {
            return await fn();
        } catch (e) {
            if (i === maxRetries - 1) throw e;
            await new Promise(resolve => setTimeout(resolve, delay));
        }
    }
}

// 使用
await retry(async () => {
    var result = await http.get('https://api.example.com/data');
    if (!result) throw new Error('请求失败');
    return result;
});`}
            </pre>
          </div>
        </section>

        <section className="page-section">
          <h2>函数库管理</h2>
          <p>建议将自定义函数组织成函数库：</p>
          <ul>
            <li><strong>ui.js</strong> - UI 操作相关函数</li>
            <li><strong>file.js</strong> - 文件操作相关函数</li>
            <li><strong>network.js</strong> - 网络请求相关函数</li>
            <li><strong>utils.js</strong> - 工具函数</li>
          </ul>
        </section>

        <section className="page-section">
          <h2>最佳实践</h2>
          <ul>
            <li>使用有意义的函数名</li>
            <li>添加函数注释说明参数和返回值</li>
            <li>处理异常情况</li>
            <li>使用模块化组织代码</li>
            <li>编写可测试的函数</li>
            <li>避免全局变量污染</li>
          </ul>
        </section>

        <section className="page-section">
          <h2>分享自定义函数</h2>
          <p>你可以将自定义函数分享到代码商店，让其他用户使用。也可以从代码商店下载其他用户分享的函数库。</p>
        </section>
      </div>
    </div>
  )
}

export default CustomFunctions

