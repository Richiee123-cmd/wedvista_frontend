import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import Navbar from "../../Components/Navabar/Navbar";
import { createBookingAPI } from "../../Service/allAPIs";
import "./UserBooking.css";

function UserBooking() {
  const location = useLocation();
  const navigate = useNavigate();

  const { vendorId, serviceId, serviceTitle } =
    location.state || {};

  const [eventDate, setEventDate] = useState("");
  const [loading, setLoading] = useState(false);

  // Redirect if invalid access
  if (!vendorId || !serviceId) {
    navigate("/");
    return null;
  }

  const handleBooking = async () => {
    if (!eventDate) {
      alert("Please select wedding date");
      return;
    }

    try {
      setLoading(true);

      await createBookingAPI({
        vendor: vendorId,
        service: serviceId,
        eventDate,
      });

      alert("🎉 Booking successful!");
      navigate("/my-bookings");
    } catch (error) {
      console.log(error);
      alert(
        error.response?.data?.message || "Booking failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />

      <section className="booking-page">
        <div className="booking-card">
          <h1>Confirm Your Booking</h1>

          <p className="booking-subtitle">
            You’re about to book a premium wedding service.
          </p>

          <div className="booking-details">
            <h3>Service Selected</h3>
            <p className="service-name">{serviceTitle}</p>
          </div>

          <div className="date-section">
            <label>Select Wedding Date</label>
            <input
              type="date"
              value={eventDate}
              onChange={(e) => setEventDate(e.target.value)}
              min={new Date().toISOString().split("T")[0]}
            />
          </div>

          <button
            className="confirm-btn"
            onClick={handleBooking}
            disabled={!eventDate || loading}
          >
            {loading ? "Booking..." : "Confirm Booking"}
          </button>
        </div>
      </section>
    </>
  );
}

export default UserBooking;
