import { useEffect, useState } from "react";
import Navbar from "../../Components/Navabar/Navbar";
import {
  getUserBookingsAPI,
  createCheckoutAPI,
} from "../../Service/allAPIs"; // adjust path if needed

function UserBookings() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchBookings = async () => {
    try {
      const res = await getUserBookingsAPI();
      setBookings(res.data);
    } catch (error) {
      alert("Failed to load bookings");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  // 💳 STRIPE PAYMENT
  const handlePayment = async (bookingId) => {
    try {
      const res = await createCheckoutAPI(bookingId);
      window.location.href = res.data.url;
    } catch (error) {
      alert("Payment failed");
    }
  };

  // 🎨 STATUS COLOR
  const statusColor = (status) => {
    if (status === "confirmed") return "green";
    if (status === "pending") return "orange";
    if (status === "rejected") return "red";
    return "black";
  };

  return (
    <>
      <Navbar />

      <div style={{ padding: "40px" }}>
        <h1>My Bookings</h1>

        {loading && <p>Loading...</p>}

        {!loading && bookings.length === 0 && (
          <p>No bookings found</p>
        )}

        {bookings.map((booking) => (
          <div
            key={booking._id}
            style={{
              border: "1px solid #ccc",
              padding: "20px",
              marginBottom: "15px",
              borderRadius: "8px",
            }}
          >
            <h2>{booking.vendor?.name}</h2>
            <p>{booking.vendor?.email}</p>

            <h3>{booking.service?.title}</h3>
            <p>₹{booking.service?.price}</p>

            <p>
              Event Date:{" "}
              {new Date(booking.eventDate).toLocaleDateString()}
            </p>

            <p>
              Status:{" "}
              <strong style={{ color: statusColor(booking.status) }}>
                {booking.status}
              </strong>
            </p>

            <p>
              Payment:{" "}
              <strong
                style={{
                  color:
                    booking.paymentStatus === "paid"
                      ? "green"
                      : "orange",
                }}
              >
                {booking.paymentStatus}
              </strong>
            </p>

            {/* 💳 PAY NOW BUTTON */}
            {booking.status === "confirmed" &&
              booking.paymentStatus === "unpaid" && (
                <button
                  onClick={() => handlePayment(booking._id)}
                  style={{
                    marginTop: "10px",
                    background: "#22c55e",
                    color: "white",
                    border: "none",
                    padding: "8px 16px",
                    borderRadius: "6px",
                    cursor: "pointer",
                  }}
                >
                  Pay Now
                </button>
              )}
          </div>
        ))}
      </div>
    </>
  );
}

export default UserBookings;
