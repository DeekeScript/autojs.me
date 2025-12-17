import { Link, useLocation } from 'react-router-dom'
import './VPSidebar.css'

function VPSidebarLink({ href, active, children, onClick }) {
  const location = useLocation()
  const isActive = active !== undefined ? active : location.pathname === href

  // 如果是外部链接（以 http 开头）或者是锚点链接（以 # 开头），使用 <a> 标签
  if (href.startsWith('http') || href.startsWith('#')) {
    return (
      <li>
        <a
          href={href}
          className={`vp-link nav-link vp-sidebar-link vp-sidebar-page ${isActive ? 'active' : ''}`}
          onClick={(e) => {
            if (href.startsWith('#')) {
              e.preventDefault()
            }
            if (onClick) onClick()
          }}
        >
          {children}
        </a>
      </li>
    )
  }

  // 否则使用 React Router 的 Link
  return (
    <li>
      <Link
        to={href}
        className={`vp-link nav-link vp-sidebar-link vp-sidebar-page ${isActive ? 'active' : ''}`}
        onClick={onClick}
      >
        {children}
      </Link>
    </li>
  )
}

export default VPSidebarLink

