import { useEffect, useState } from "react";
import axios from "axios";
import VendorSidebar from "../Components/VendorSideBar";
import "../Vendor.css";

function VendorDashboard() {

  const token = localStorage.getItem("vendorToken");

  const [servicesCount, setServicesCount] = useState(0);
  const [bookingsCount, setBookingsCount] = useState(0);
  const [revenue, setRevenue] = useState(0);
  const [rating, setRating] = useState(0);

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {

      // 1️⃣ Get My Services
      const servicesRes = await axios.get(
        "http://localhost:5000/api/services/my",
        {
          headers: { Authorization: `Bearer ${token}` }
        }
      );

      setServicesCount(servicesRes.data.length);

      // 2️⃣ Get My Bookings
      const bookingsRes = await axios.get(
        "http://localhost:5000/api/bookings/vendor",
        {
          headers: { Authorization: `Bearer ${token}` }
        }
      );

      const bookings = bookingsRes.data;
      setBookingsCount(bookings.length);

      // 3️⃣ Calculate Revenue
      const totalRevenue = bookings.reduce(
        (sum, booking) => sum + booking.price,
        0
      );

      setRevenue(totalRevenue);

      // 4️⃣ Calculate Rating (if exists)
      const ratings = bookings
        .filter(b => b.rating)
        .map(b => b.rating);

      if (ratings.length > 0) {
        const avg =
          ratings.reduce((a, b) => a + b, 0) / ratings.length;
        setRating(avg.toFixed(1));
      } else {
        setRating("N/A");
      }

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="vendor-layout">

      <VendorSidebar />

      <main className="vendor-content">

        <h1 className="page-title">Vendor Dashboard</h1>

        <div className="stats-grid">

          <div className="stat-card">
            <h3>Services</h3>
            <p>{servicesCount}</p>
          </div>

          <div className="stat-card">
            <h3>Bookings</h3>
            <p>{bookingsCount}</p>
          </div>

          <div className="stat-card">
            <h3>Rating</h3>
            <p>{rating}</p>
          </div>

          <div className="stat-card">
            <h3>Revenue</h3>
            <p>₹ {revenue.toLocaleString()}</p>
          </div>

        </div>

      </main>

    </div>
  );
}

export default VendorDashboard;
