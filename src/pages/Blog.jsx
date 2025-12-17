import './Page.css'

function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: 'Auto.js Pro 9.0 新特性介绍',
      date: '2024-01-15',
      author: 'Auto.js 团队',
      excerpt: 'Auto.js Pro 9.0 带来了 Node.js 引擎、性能提升 100 倍、支持 npm 包等重大更新...',
      content: `Auto.js Pro 9.0 是一个重大版本更新，引入了 Node.js 16.x 引擎，性能相比原引擎提升了 100 倍以上。新版本支持 ES2021 语法，可以使用 200 万个 npm 包，包括 express、koa、ws 等热门库。`
    },
    {
      id: 2,
      title: '如何使用 VSCode 进行远程调试',
      date: '2024-01-10',
      author: '开发者',
      excerpt: '详细介绍如何在 VSCode 中配置 Auto.js Pro 远程调试，实现单步调试、断点、变量查看等功能...',
      content: `VSCode 远程调试功能让开发体验大幅提升。你可以像调试普通 JavaScript 代码一样调试 Auto.js Pro 脚本，支持单步执行、查看变量、设置断点等功能。`
    },
    {
      id: 3,
      title: 'Auto.js Pro 插件开发指南',
      date: '2024-01-05',
      author: '插件开发者',
      excerpt: '学习如何开发 Auto.js Pro 插件，从基础到高级，包含插件打包和发布流程...',
      content: `插件系统让 Auto.js Pro 的功能可以无限扩展。你可以开发自己的插件，也可以从插件商店下载其他开发者分享的插件。插件可以被打包到 APK 中，无需单独安装。`
    },
    {
      id: 4,
      title: 'React/Vue 在 Auto.js Pro 中的应用',
      date: '2023-12-28',
      author: '前端开发者',
      excerpt: '探索如何在 Auto.js Pro 中使用 React 或 Vue 创建现代化的 Web 界面...',
      content: `Auto.js Pro 官方支持使用 React 或 Vue 等前端框架来创建界面。你可以使用熟悉的框架和工具，快速构建美观的用户界面。`
    },
    {
      id: 5,
      title: '性能优化技巧',
      date: '2023-12-20',
      author: '性能专家',
      excerpt: '分享 Auto.js Pro 脚本性能优化的实用技巧，让你的脚本运行更快更稳定...',
      content: `性能优化是编写高质量脚本的关键。通过合理使用异步操作、避免不必要的循环、优化选择器等方式，可以显著提升脚本性能。`
    },
    {
      id: 6,
      title: 'OCR 文字识别功能详解',
      date: '2023-12-15',
      author: '技术专家',
      excerpt: '深入了解 Auto.js Pro 的 OCR 功能，学习如何使用 OCR 识别屏幕文字...',
      content: `OCR 功能让脚本可以识别屏幕上的文字，这对于处理图片验证码、读取文本内容等场景非常有用。`
    }
  ]

  return (
    <div className="page">
      <div className="container">
        <h1>博客</h1>
        
        <section className="blog-list">
          {blogPosts.map(post => (
            <article key={post.id} className="blog-post">
              <h2>{post.title}</h2>
              <div className="blog-meta">
                <span className="blog-date">{post.date}</span>
                <span className="blog-author">作者: {post.author}</span>
              </div>
              <p className="blog-excerpt">{post.excerpt}</p>
              <div className="blog-content">
                <p>{post.content}</p>
              </div>
            </article>
          ))}
        </section>

        <section className="page-section">
          <h2>更多资源</h2>
          <ul>
            <li><a href="/guide">查看完整指南</a></li>
            <li><a href="/api-v1">第一代 API 文档</a></li>
            <li><a href="/api-v2">第二代 API 文档</a></li>
            <li><a href="https://jq.qq.com/?_wv=1027&k=642877773" target="_blank" rel="noopener noreferrer">加入 QQ 交流群</a></li>
          </ul>
        </section>
      </div>
    </div>
  )
}

export default Blog

