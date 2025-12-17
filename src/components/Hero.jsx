import './Hero.css'

function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <h1 className="hero-title">Auto.js Pro</h1>
        <p className="hero-subtitle">学习与编程JavaScript IDE</p>
        <div className="hero-actions">
          <a 
            href="https://jq.qq.com/?_wv=1027&k=642877773" 
            className="btn btn-primary" 
            target="_blank"
            rel="noopener noreferrer"
          >
            加入QQ群:642877773
          </a>
          <span className="hero-info">永久PRO版 仅需199</span>
        </div>
        <div className="hero-cta">
          <a href="#start" className="btn btn-secondary">立即开始学习</a>
          <a href="#buy" className="btn btn-accent">立即购买Pro版</a>
          <a href="#download" className="btn btn-outline">4.1.1下载</a>
        </div>
      </div>
    </section>
  )
}

export default Hero

