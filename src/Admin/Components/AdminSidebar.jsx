import { NavLink, useNavigate } from "react-router-dom";

function AdminSidebar() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("admin");
    navigate("/admin/login");
  };

  return (
    <aside className="admin-sidebar">
      <h2>WedVista Admin</h2>

      <NavLink to="/admin/dashboard">Dashboard</NavLink>
      <NavLink to="/admin/users">Users</NavLink>
      <NavLink to="/admin/vendors">Vendors</NavLink>
      <NavLink to="/admin/contacts">Contacts</NavLink>

      <button className="logout-btn" onClick={logout}>
        Logout
      </button>
    </aside>
  );
}

export default AdminSidebar;
