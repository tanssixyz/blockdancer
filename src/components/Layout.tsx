import { Outlet, NavLink } from "react-router"

export function Layout() {
  return (
    <div className="layout">
      <header className="header">
        <NavLink to="/" className="wordmark">blockdancer</NavLink>
        <nav className="nav">
          <NavLink
            to="/work"
            className={({ isActive }) => `nav-link ${isActive ? "nav-link-active" : ""}`}
          >
            work
          </NavLink>
          <NavLink
            to="/writing"
            className={({ isActive }) => `nav-link ${isActive ? "nav-link-active" : ""}`}
          >
            writing
          </NavLink>
        </nav>
      </header>

      <main className="main">
        <Outlet />
      </main>

      <footer className="footer">
        <span>blockdancer.kaarna.xyz</span>
        <span>·</span>
        <a href="https://kaarna.xyz" className="footer-link">kaarna</a>
      </footer>
    </div>
  )
}
