import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";


const Layout = () => {
  const { pathname } = useLocation();

  return (
    <div className="layout">
      <aside className="sidebar">
        <h2 className="sidebar-title">🎬 Watchlist</h2>
        <nav>
          <ul>
            <li className={pathname === "/" ? "active" : ""}>
              <Link to="/">Home</Link>
            </li>
            <li className={pathname === "/favorites" ? "active" : ""}>
              <Link to="/favorites">Favorites</Link>
            </li>
            <li className={pathname === "/stats" ? "active" : ""}>
              <Link to="/stats">Stats</Link>
            </li>
          </ul>
        </nav>
      </aside>
      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
