import './VPSidebar.css'

function VPSidebarGroup({ title, children }) {
  return (
    <li>
      <section className="vp-sidebar-group">
        {title && (
          <p className="vp-sidebar-heading">
            <span className="vp-sidebar-title">{title}</span>
          </p>
        )}
        <ul className="vp-sidebar-links">
          {children}
        </ul>
      </section>
    </li>
  )
}

export default VPSidebarGroup

