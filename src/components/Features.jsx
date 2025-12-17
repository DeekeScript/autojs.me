import './Features.css'

function Features() {
  const features = [
    {
      icon: '🚀',
      title: 'Node.js引擎',
      description: 'Pro 9新增Node.js 16.x引擎，性能是原引擎的100倍以上，支持ES2021'
    },
    {
      icon: '📦',
      title: '插件商店与免安装',
      description: '插件打包时可被合并到apk，无需再单独安装；插件商店上线，多个插件任你选择'
    },
    {
      icon: '🔒',
      title: '加密增强',
      description: 'Node.js引擎加密目前未被还原代码，即将推出在线优化进一步增强加密'
    },
    {
      icon: '🐛',
      title: '完美VSCode调试体验',
      description: '远程单步调试、自动补全，9.3版本更全面优化了文件同步效率、管理手机文件等功能'
    },
    {
      icon: '📚',
      title: 'Npm生态支持',
      description: '可安装和使用npm包，包括ws、express、koa等200万个npm包'
    },
    {
      icon: '🏪',
      title: '代码商店',
      description: '近千个免费在线代码与项目随意下载，也可与其他用户分享你的代码与项目'
    },
    {
      icon: '📱',
      title: '打包',
      description: '自定义打包时可自定义签名、CPU架构、启动图、权限，优化应用大小，混淆组件等'
    },
    {
      icon: '🌐',
      title: 'React/Vue/Web',
      description: '官方支持使用web编写界面，甚至可以使用React/Vue等框架，并提供了web交互API'
    },
    {
      icon: '📝',
      title: '多Tab编辑器工作区',
      description: '多Tab文件编辑、树状文件管理，编辑器基于LSP智能补全、语法错误提示等'
    },
    {
      icon: '🎨',
      title: 'UI可视化设计',
      description: '由浩然实现的可视化UI设计，为小白设计UI提供了更方便简单的设计界面'
    },
    {
      icon: '⚡',
      title: 'API增强',
      description: '新增WebSocket、数据库、原生界面、任务、设置、OCR等多个模块和API'
    },
    {
      icon: '🔧',
      title: 'Bug修复与优化',
      description: '3年200个版本，近500个Bug修复，近200个优化，200多个新功能'
    }
  ]

  return (
    <section className="features">
      <div className="container">
        <div className="features-grid">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="feature-card"
            >
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features

