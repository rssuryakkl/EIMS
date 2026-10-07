import "./Navbar.css";

function Navbar() {
  return (
    <header className="navbar">

      <div className="navbar-left">
        <h2>LCC WAREHOUSE</h2>
      </div>

      <div className="navbar-right">
        <div className="admin-profile">
          <div className="admin-avatar">
            A
          </div>

          <span>Admin</span>
          <span className="dropdown-icon">▼</span>
        </div>
      </div>

    </header>
  );
}

export default Navbar;