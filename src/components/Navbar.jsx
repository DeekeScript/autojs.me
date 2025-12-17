import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.ctrlKey && e.key === 'k') {
        e.preventDefault()
        handleSearch()
      }
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [])

  const handleSearch = () => {
    const searchTerm = prompt('请输入搜索关键词：')
    if (searchTerm) {
      console.log('搜索:', searchTerm)
      alert('搜索功能：' + searchTerm)
    }
  }

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="nav-brand">
          <Link to="/">Auto.js Pro</Link>
        </div>
        <ul className="nav-menu">
          <li><Link to="/guide" className={location.pathname === '/guide' ? 'active' : ''}>指南</Link></li>
          <li><Link to="/api-v1" className={location.pathname === '/api-v1' ? 'active' : ''}>第一代API文档</Link></li>
          <li><Link to="/api-v2" className={location.pathname === '/api-v2' ? 'active' : ''}>第二代API文档</Link></li>
          <li 
            className="dropdown"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <Link to="/links" className={location.pathname === '/links' ? 'active' : ''}>官网与相关链接</Link>
            <ul className={`dropdown-menu ${isDropdownOpen ? 'open' : ''}`}>
              <li><a href="https://jq.qq.com/?_wv=1027&k=642877773" target="_blank" rel="noopener noreferrer">交流QQ群</a></li>
              <li><Link to="/links#download">官方包下载</Link></li>
            </ul>
          </li>
        </ul>
        <div className="nav-search">
          <button className="search-btn" onClick={handleSearch} aria-label="搜索">Ctrl+K</button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

