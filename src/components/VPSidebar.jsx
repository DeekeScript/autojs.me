import './VPSidebar.css'

function VPSidebar({ children }) {
  return (
    <nav className="vp-sidebar-nav">
      <ul className="vp-sidebar-links">
        {children}
      </ul>
    </nav>
  )
}

export default VPSidebar

