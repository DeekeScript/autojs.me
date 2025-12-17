import './VPLayout.css'

function VPLayout({ children, sidebar }) {
  return (
    <div className="vp-layout">
      {sidebar && (
        <aside className="vp-sidebar">
          {sidebar}
        </aside>
      )}
      <main className="vp-content">
        {children}
      </main>
    </div>
  )
}

export default VPLayout

