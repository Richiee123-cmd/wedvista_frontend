import Navbar from "../../Components/Navabar/Navbar";
import "./Dashboard.css";

function Dashboard() {
  return (
    <>
      <Navbar />
      <div className="dashboard">
        <h2>Wedding Dashboard</h2>

        <div className="dashboard-cards">
          <div className="dash-card">
            <h3>Budget</h3>
            <p>₹ 2,90,000 remaining</p>
          </div>

          <div className="dash-card">
            <h3>Guests</h3>
            <p>120 Invited</p>
          </div>

          <div className="dash-card">
            <h3>Vendors</h3>
            <p>5 Booked</p>
          </div>

          <div className="dash-card">
            <h3>Tasks</h3>
            <p>8 Pending</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
