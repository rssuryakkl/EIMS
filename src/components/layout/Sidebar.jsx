import { NavLink } from "react-router-dom";
import "./Sidebar.css";
import logo from "../../assets/images/LCC.jpeg";

function Sidebar() {
  return (
    <aside className="sidebar">

      <div className="sidebar-logo">
        <img src={logo} alt="LCC Logo" />

        <div className="sidebar-logo-name">
          <span>SCH</span>
          <strong>WAREHOUSE</strong>
        </div>
      </div>

      {/* Sidebar Menu */}
      <div className="sidebar-menu">

        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            isActive ? "sidebar-link active" : "sidebar-link"
          }
        >
          <span className="menu-icon">🟡</span>
          <span>Dashboard</span>
        </NavLink>

        <NavLink
          to="/products"
          className={({ isActive }) =>
            isActive ? "sidebar-link active" : "sidebar-link"
          }
        >
          <span className="menu-icon">📦</span>
          <span>Products</span>
        </NavLink>

        <NavLink
          to="/inventory"
          className={({ isActive }) =>
            isActive ? "sidebar-link active" : "sidebar-link"
          }
        >
          <span className="menu-icon">📊</span>
          <span>Inventory</span>
        </NavLink>

        <NavLink
          to="/users"
          className={({ isActive }) =>
            isActive ? "sidebar-link active" : "sidebar-link"
          }
        >
          <span className="menu-icon">👥</span>
          <span>Users</span>
        </NavLink>

        <NavLink
          to="/reports"
          className={({ isActive }) =>
            isActive ? "sidebar-link active" : "sidebar-link"
          }
        >
          <span className="menu-icon">📈</span>
          <span>Reports</span>
        </NavLink>

        <NavLink
          to="/settings"
          className={({ isActive }) =>
            isActive ? "sidebar-link active" : "sidebar-link"
          }
        >
          <span className="menu-icon">⚙️</span>
          <span>Settings</span>
        </NavLink>

      </div>

      {/* Logout */}
      <div className="sidebar-bottom">
        <button className="logout-btn">
          <span className="menu-icon">🚪</span>
          <span>Logout</span>
        </button>
      </div>

    </aside>
  );
}

export default Sidebar;