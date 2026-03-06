import { NavLink, useNavigate } from "react-router-dom";

function VendorSidebar() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("vendor");
    navigate("/vendor/login");
  };

  return (
    <aside className="vendor-sidebar">
      <h2>Vendor Panel</h2>

      <NavLink to="/vendor/dashboard">Dashboard</NavLink>
      <NavLink to="/vendor/services">My Services</NavLink>
      <NavLink to="/vendor/bookings">Bookings</NavLink>
      <NavLink to="/vendor/profile">Profile</NavLink>

      <button className="logout-btn" onClick={logout}>
        Logout
      </button>
    </aside>
  );
}

export default VendorSidebar;
