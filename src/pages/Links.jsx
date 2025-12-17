import './Page.css'

function Links() {
  return (
    <div className="page">
      <div className="container">
        <h1>官网与相关链接</h1>
        
        <section className="page-section">
          <h2>官方链接</h2>
          <ul className="links-list">
            <li>
              <a href="https://jq.qq.com/?_wv=1027&k=642877773" target="_blank" rel="noopener noreferrer">
                交流QQ群: 642877773
              </a>
              <p>加入官方 QQ 群，与其他开发者交流学习</p>
            </li>
            <li>
              <a href="#download" id="download">
                官方包下载
              </a>
              <p>下载最新版本的 Auto.js Pro 安装包</p>
            </li>
          </ul>
        </section>

        <section className="page-section" id="download">
          <h2>下载</h2>
          <div className="download-section">
            <h3>Auto.js Pro 4.1.1</h3>
            <p>最新稳定版本，包含所有最新功能和修复</p>
            <div className="download-info">
              <p><strong>版本号:</strong> 4.1.1</p>
              <p><strong>更新日期:</strong> 2024-01-20</p>
              <p><strong>文件大小:</strong> 约 50 MB</p>
              <p><strong>系统要求:</strong> Android 5.0 及以上</p>
            </div>
            <div className="download-buttons">
              <a href="#" className="btn btn-primary">立即下载</a>
              <a href="#" className="btn btn-outline">查看更新日志</a>
            </div>
          </div>

          <div className="download-section">
            <h3>历史版本</h3>
            <ul>
              <li><a href="#">4.1.0</a></li>
              <li><a href="#">4.0.9</a></li>
              <li><a href="#">4.0.8</a></li>
            </ul>
          </div>
        </section>

        <section className="page-section">
          <h2>相关资源</h2>
          <ul className="links-list">
            <li>
              <a href="/guide">使用指南</a>
              <p>快速上手指南和教程</p>
            </li>
            <li>
              <a href="/api-v1">第一代 API 文档</a>
              <p>基础 API 参考文档</p>
            </li>
            <li>
              <a href="/api-v2">第二代 API 文档</a>
              <p>Node.js 引擎 API 文档</p>
            </li>
            <li>
              <a href="/custom-functions">自定义函数</a>
              <p>学习如何创建和使用自定义函数</p>
            </li>
            <li>
              <a href="/blog">博客</a>
              <p>最新文章和教程</p>
            </li>
          </ul>
        </section>

        <section className="page-section">
          <h2>社区</h2>
          <ul className="links-list">
            <li>
              <a href="https://jq.qq.com/?_wv=1027&k=642877773" target="_blank" rel="noopener noreferrer">
                QQ 群: 642877773
              </a>
              <p>官方 QQ 交流群，永久 PRO 版仅需 199 元</p>
            </li>
            <li>
              <a href="#">代码商店</a>
              <p>分享和下载代码项目</p>
            </li>
            <li>
              <a href="#">插件商店</a>
              <p>浏览和安装插件</p>
            </li>
          </ul>
        </section>

        <section className="page-section">
          <h2>购买与授权</h2>
          <div className="purchase-info">
            <h3>永久 PRO 版</h3>
            <p className="price">仅需 ¥199</p>
            <p>购买永久 PRO 版，享受所有功能，无限制使用</p>
            <ul>
              <li>所有 PRO 功能</li>
              <li>永久授权</li>
              <li>优先技术支持</li>
              <li>免费更新</li>
            </ul>
            <a href="#buy" className="btn btn-accent">立即购买</a>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Links

