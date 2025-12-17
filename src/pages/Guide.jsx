import './Page.css'

function Guide() {
  return (
    <div className="page">
      <div className="container">
        <h1>Auto.js Pro 完整指南</h1>
        
        <section className="page-section">
          <h2>目录</h2>
          <ul className="toc">
            <li><a href="#quick-start">快速开始</a></li>
            <li><a href="#basic-concepts">基础概念</a></li>
            <li><a href="#first-script">编写第一个脚本</a></li>
            <li><a href="#ui-operations">UI 操作详解</a></li>
            <li><a href="#file-operations">文件操作</a></li>
            <li><a href="#network">网络请求</a></li>
            <li><a href="#advanced">高级功能</a></li>
            <li><a href="#best-practices">最佳实践</a></li>
            <li><a href="#troubleshooting">常见问题</a></li>
          </ul>
        </section>

        <section id="quick-start" className="page-section">
          <h2>快速开始</h2>
          <p>欢迎使用 Auto.js Pro！这是一个强大的 JavaScript IDE，专为 Android 自动化而设计。</p>
          
          <h3>安装与配置</h3>
          <ol>
            <li><strong>下载应用</strong>：从官网或应用商店下载 Auto.js Pro</li>
            <li><strong>安装应用</strong>：安装 APK 文件到 Android 设备</li>
            <li><strong>开启无障碍服务</strong>：
              <ul>
                <li>打开设置 → 无障碍</li>
                <li>找到 Auto.js Pro 并开启</li>
                <li>这是使用自动化功能的前提</li>
              </ul>
            </li>
            <li><strong>连接 VSCode（可选）</strong>：
              <ul>
                <li>安装 Auto.js Pro VSCode 插件</li>
                <li>在手机上开启远程调试</li>
                <li>在 VSCode 中连接设备</li>
              </ul>
            </li>
            <li><strong>开始编写脚本</strong>：创建新文件，开始你的第一个脚本</li>
          </ol>

          <h3>环境要求</h3>
          <ul>
            <li>Android 5.0 及以上版本</li>
            <li>已开启无障碍服务</li>
            <li>足够的存储空间（建议至少 100MB）</li>
          </ul>
        </section>

        <section id="basic-concepts" className="page-section">
          <h2>基础概念</h2>
          
          <h3>什么是 Auto.js Pro？</h3>
          <p>Auto.js Pro 是一个基于 JavaScript 的 Android 自动化工具，允许你编写脚本来控制 Android 设备，实现各种自动化任务。它提供了丰富的 API，可以操作 UI、文件、网络等。</p>

          <h3>核心特性</h3>
          <ul>
            <li><strong>Node.js 引擎</strong>：基于 Node.js 16.x，性能提升 100 倍以上，支持 ES2021 语法</li>
            <li><strong>丰富的 API</strong>：提供 UI 操作、文件系统、网络请求、图像处理等 API</li>
            <li><strong>VSCode 调试</strong>：支持远程单步调试、断点、变量查看等</li>
            <li><strong>Npm 生态</strong>：可以使用 200 万个 npm 包，包括 express、koa、ws 等</li>
            <li><strong>插件系统</strong>：支持插件扩展功能</li>
            <li><strong>代码商店</strong>：可以分享和下载代码</li>
          </ul>

          <h3>脚本执行方式</h3>
          <ul>
            <li><strong>直接运行</strong>：在应用内点击运行按钮</li>
            <li><strong>定时任务</strong>：设置定时执行脚本</li>
            <li><strong>打包为 APK</strong>：将脚本打包成独立应用</li>
            <li><strong>远程调试</strong>：通过 VSCode 远程调试</li>
          </ul>
        </section>

        <section id="first-script" className="page-section">
          <h2>编写第一个脚本</h2>
          
          <h3>Hello World</h3>
          <p>最简单的脚本示例：</p>
          <pre className="code-block">
{`// 显示提示消息
toast("Hello, Auto.js Pro!");

// 输出到控制台
console.log("Hello World");`}
          </pre>

          <h3>点击操作</h3>
          <pre className="code-block">
{`// 点击屏幕坐标
click(500, 1000);

// 查找并点击文本
text("确定").click();

// 通过 ID 点击
id("btn_ok").click();`}
          </pre>

          <h3>等待操作</h3>
          <pre className="code-block">
{`// 等待 Activity 出现
waitForActivity("com.example.MainActivity");

// 等待控件出现
text("登录").waitFor();

// 延迟执行
sleep(1000); // 延迟 1 秒`}
          </pre>

          <h3>应用启动</h3>
          <pre className="code-block">
{`// 启动应用
launchApp("微信");

// 启动指定 Activity
launch("com.example.app", "com.example.MainActivity");`}
          </pre>

          <h3>完整示例：自动登录</h3>
          <pre className="code-block">
{`// 启动应用
launchApp("微信");
sleep(2000);

// 等待登录界面
waitForActivity("com.tencent.mm.ui.LauncherUI");

// 输入账号
id("username").setText("your_username");

// 输入密码
id("password").setText("your_password");

// 点击登录按钮
text("登录").click();

// 等待登录完成
waitForActivity("com.tencent.mm.ui.MainTabUI");
toast("登录成功");`}
          </pre>
        </section>

        <section id="ui-operations" className="page-section">
          <h2>UI 操作详解</h2>
          
          <h3>坐标点击</h3>
          <pre className="code-block">
{`// 点击指定坐标
click(500, 1000);

// 长按
longClick(500, 1000);

// 滑动
swipe(500, 1000, 500, 500, 500);`}
          </pre>

          <h3>控件查找</h3>
          <pre className="code-block">
{`// 通过文本查找
text("确定").click();

// 通过 ID 查找
id("btn_ok").click();

// 通过描述查找
desc("确定按钮").click();

// 通过类名查找
className("android.widget.Button").clickable().findOne().click();`}
          </pre>

          <h3>控件操作</h3>
          <pre className="code-block">
{`// 点击
text("确定").click();

// 输入文本
id("input").setText("Hello");

// 清空文本
id("input").setText("");

// 滚动
scrollable().scrollForward();

// 选择
listView().item(0).click();`}
          </pre>

          <h3>等待控件</h3>
          <pre className="code-block">
{`// 等待控件出现（最多等待 10 秒）
var btn = text("确定").findOne(10000);
if (btn) {
    btn.click();
}

// 一直等待直到找到
text("确定").waitFor();
text("确定").click();

// 判断控件是否存在
if (text("确定").exists()) {
    text("确定").click();
}`}
          </pre>

          <h3>控件过滤</h3>
          <pre className="code-block">
{`// 查找可点击的按钮
className("Button").clickable().findOne().click();

// 查找已启用的控件
className("Button").enabled().findOne().click();

// 组合条件
text("确定")
    .clickable()
    .enabled()
    .findOne()
    .click();`}
          </pre>
        </section>

        <section id="file-operations" className="page-section">
          <h2>文件操作</h2>
          
          <h3>读写文件</h3>
          <pre className="code-block">
{`// 读取文本文件
var content = files.read("/sdcard/data.txt");
console.log(content);

// 写入文本文件
files.write("/sdcard/data.txt", "Hello World");

// 追加内容
files.append("/sdcard/log.txt", "新的一行\\n");

// 读取二进制文件
var bytes = files.readBytes("/sdcard/image.jpg");

// 写入二进制文件
files.writeBytes("/sdcard/copy.jpg", bytes);`}
          </pre>

          <h3>目录操作</h3>
          <pre className="code-block">
{`// 判断文件是否存在
if (files.exists("/sdcard/data.txt")) {
    console.log("文件存在");
}

// 创建目录
files.ensureDir("/sdcard/myapp/data");

// 列出目录内容
var fileList = files.listDir("/sdcard");
fileList.forEach(function(file) {
    console.log(file);
});

// 删除文件
files.remove("/sdcard/data.txt");

// 删除目录
files.removeDir("/sdcard/myapp");`}
          </pre>

          <h3>文件信息</h3>
          <pre className="code-block">
{`// 获取文件名
var name = files.getName("/sdcard/data.txt");
console.log(name); // 输出: data.txt

// 获取扩展名
var ext = files.getExtension("/sdcard/data.txt");
console.log(ext); // 输出: txt

// 获取父目录
var parent = files.getParent("/sdcard/data.txt");
console.log(parent); // 输出: /sdcard`}
          </pre>
        </section>

        <section id="network" className="page-section">
          <h2>网络请求</h2>
          
          <h3>GET 请求</h3>
          <pre className="code-block">
{`// 简单 GET 请求
var response = http.get("https://api.example.com/data");
console.log(response.body.string());

// 带参数的 GET 请求
var response = http.get("https://api.example.com/data", {
    headers: {
        "User-Agent": "Auto.js",
        "Authorization": "Bearer token"
    }
});`}
          </pre>

          <h3>POST 请求</h3>
          <pre className="code-block">
{`// POST 表单数据
var response = http.post("https://api.example.com/data", {
    key: "value"
});

// POST JSON 数据
var response = http.postJson("https://api.example.com/data", {
    name: "Auto.js",
    version: "4.1.1"
});

// 文件上传
var response = http.postMultipart("https://api.example.com/upload", {
    file: open("/sdcard/image.jpg"),
    name: "image"
});`}
          </pre>

          <h3>处理响应</h3>
          <pre className="code-block">
{`var response = http.get("https://api.example.com/data");

// 获取状态码
console.log("状态码：" + response.statusCode);

// 获取响应头
console.log("Content-Type：" + response.headers["Content-Type"]);

// 获取文本内容
var text = response.body.string();

// 获取 JSON
var json = response.body.json();

// 获取字节数组
var bytes = response.body.bytes();`}
          </pre>
        </section>

        <section id="advanced" className="page-section">
          <h2>高级功能</h2>
          
          <h3>图像识别</h3>
          <pre className="code-block">
{`// 截图
var img = captureScreen();

// 保存截图
images.save(img, "/sdcard/screenshot.png");

// 查找图片
var template = images.read("/sdcard/template.png");
var point = images.findImage(img, template);
if (point) {
    click(point.x, point.y);
}

// 查找颜色
var point = images.findColor(img, "#ff0000");
if (point) {
    click(point.x, point.y);
}`}
          </pre>

          <h3>OCR 文字识别</h3>
          <pre className="code-block">
{`// 截图并识别文字
var img = captureScreen();
var result = paddle.ocr(img);
console.log(result);

// 识别指定区域
var region = images.clip(img, 0, 0, 500, 500);
var text = paddle.ocr(region);`}
          </pre>

          <h3>定时任务</h3>
          <pre className="code-block">
{`// 使用 setInterval
var timer = setInterval(function() {
    console.log("定时执行");
}, 1000);

// 5 秒后停止
setTimeout(function() {
    clearInterval(timer);
}, 5000);`}
          </pre>

          <h3>多线程</h3>
          <pre className="code-block">
{`// 创建线程
var thread = threads.start(function() {
    // 在后台执行的任务
    while (true) {
        console.log("后台任务");
        sleep(1000);
    }
});

// 停止线程
thread.interrupt();`}
          </pre>
        </section>

        <section id="best-practices" className="page-section">
          <h2>最佳实践</h2>
          
          <h3>错误处理</h3>
          <pre className="code-block">
{`try {
    text("确定").click();
} catch (e) {
    console.error("点击失败：" + e);
    toast("操作失败");
}

// 使用 findOne 的安全方式
var btn = text("确定").findOne(5000);
if (btn) {
    btn.click();
} else {
    toast("未找到按钮");
}`}
          </pre>

          <h3>代码组织</h3>
          <pre className="code-block">
{`// 使用函数组织代码
function login(username, password) {
    id("username").setText(username);
    id("password").setText(password);
    text("登录").click();
}

// 使用模块
// utils.js
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

module.exports = { sleep };

// main.js
const { sleep } = require('./utils');
await sleep(1000);`}
          </pre>

          <h3>性能优化</h3>
          <ul>
            <li>合理使用延迟，避免操作过快导致失败</li>
            <li>使用控件查找而不是坐标点击（更稳定）</li>
            <li>缓存查找结果，避免重复查找</li>
            <li>使用异步操作提高效率</li>
            <li>及时释放资源（如图片对象）</li>
          </ul>

          <h3>调试技巧</h3>
          <ul>
            <li>使用 console.log 输出调试信息</li>
            <li>使用 toast 显示关键步骤</li>
            <li>使用 VSCode 断点调试</li>
            <li>截图保存关键状态</li>
            <li>记录日志文件</li>
          </ul>
        </section>

        <section id="troubleshooting" className="page-section">
          <h2>常见问题</h2>
          
          <h3>控件找不到</h3>
          <ul>
            <li>检查无障碍服务是否开启</li>
            <li>增加等待时间</li>
            <li>使用更宽泛的查找条件</li>
            <li>检查应用是否已启动</li>
            <li>使用坐标点击作为备选方案</li>
          </ul>

          <h3>脚本执行失败</h3>
          <ul>
            <li>检查权限是否授予</li>
            <li>检查网络连接</li>
            <li>查看错误日志</li>
            <li>使用 try-catch 捕获异常</li>
            <li>检查设备是否处于正确状态</li>
          </ul>

          <h3>性能问题</h3>
          <ul>
            <li>减少不必要的截图操作</li>
            <li>优化查找逻辑</li>
            <li>使用异步操作</li>
            <li>避免死循环</li>
            <li>及时释放资源</li>
          </ul>
        </section>

        <section className="page-section">
          <h2>学习资源</h2>
          <ul>
            <li><a href="/api-v1">第一代 API 文档</a> - 基础 API 参考</li>
            <li><a href="/api-v2">第二代 API 文档</a> - Node.js 引擎 API</li>
            <li><a href="/custom-functions">自定义函数</a> - 函数开发指南</li>
            <li><a href="/blog">博客文章</a> - 教程和技巧</li>
            <li><a href="https://jq.qq.com/?_wv=1027&k=642877773" target="_blank" rel="noopener noreferrer">QQ 交流群</a> - 642877773</li>
          </ul>
        </section>
      </div>
    </div>
  )
}

export default Guide
