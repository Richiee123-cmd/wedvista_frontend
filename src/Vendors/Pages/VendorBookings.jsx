import { useEffect, useState } from "react";
import axios from "axios";
import VendorSidebar from "../Components/VendorSideBar";
import "../Vendor.css";

function VendorBookings() {
  const [bookings, setBookings] = useState([]);
  const token = localStorage.getItem("vendorToken");

  // 🔹 Fetch vendor bookings
  const fetchBookings = async () => {
    try {
      const res = await axios.get(
        "http://localhost:5000/api/bookings/vendor",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setBookings(res.data);
    } catch (error) {
      alert("Failed to load bookings");
    }
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  // 🔹 Accept / Reject booking
  const updateStatus = async (id, status) => {
    try {
      await axios.put(
        `http://localhost:5000/api/bookings/${id}`,
        { status },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      fetchBookings();
    } catch (error) {
      alert("Failed to update booking");
    }
  };

  return (
    <div className="vendor-layout">
      <VendorSidebar />

      <main className="vendor-content">
        <h1>Bookings</h1>

        {bookings.length === 0 && (
          <p>No bookings yet</p>
        )}

        {bookings.map((b) => (
          <div key={b._id} className="booking-card">
            <h3>{b.service?.title}</h3>
            <p><strong>User:</strong> {b.user?.name}</p>
            <p><strong>Date:</strong> {new Date(b.eventDate).toDateString()}</p>
            <p><strong>Status:</strong> {b.status}</p>

            {b.status === "pending" && (
              <div className="booking-actions">
                <button
                  onClick={() => updateStatus(b._id, "confirmed")}
                >
                  Accept
                </button>

                <button
                  onClick={() => updateStatus(b._id, "rejected")}
                >
                  Reject
                </button>
              </div>
            )}
          </div>
        ))}
      </main>
    </div>
  );
}

export default VendorBookings;
