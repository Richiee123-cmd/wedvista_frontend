import { useState } from "react";
import Navbar from "../../Components/Navabar/Navbar";
import "./GuestManagement.css";
import heroImg from "../../assets/u_2ad3kll2vv-bride-8581643_1280.jpg";
import Footer from "../../Components/Footer/Footer";

function GuestManagement() {
  const [guests, setGuests] = useState([]);
  const [form, setForm] = useState({
    name: "",
    category: "Family",
    status: "Pending",
  });

  const addGuest = () => {
    if (!form.name) return;

    setGuests([...guests, form]);
    setForm({ name: "", category: "Family", status: "Pending" });
  };

  const total = guests.length;
  const confirmed = guests.filter(g => g.status === "Confirmed").length;

  return (
    <>
      <Navbar />
<section
  className="guest-hero"
  style={{ backgroundImage: `url(${heroImg})` }}
>
  <div className="guest-hero-overlay">
    <h1>Guest Management</h1>
    <p>Track RSVPs & organize your wedding guest list effortlessly.</p>
  </div>
</section>

      <div className="guest-page">
        <h1>Guest Management</h1>
        <p className="guest-desc">
          Organize your guest list, track RSVPs, and plan seating effortlessly.
        </p>

        {/* SUMMARY */}
        <div className="guest-summary">
          <div>
            <h3>Total Guests</h3>
            <span>{total}</span>
          </div>
          <div>
            <h3>Confirmed</h3>
            <span>{confirmed}</span>
          </div>
        </div>

        {/* ADD GUEST */}
        <div className="guest-form">
          <input
            type="text"
            placeholder="Guest Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />

          <select
            value={form.category}
            onChange={(e) => setForm({ ...form, category: e.target.value })}
          >
            <option>Family</option>
            <option>Friends</option>
            <option>Colleagues</option>
          </select>

          <select
            value={form.status}
            onChange={(e) => setForm({ ...form, status: e.target.value })}
          >
            <option>Pending</option>
            <option>Confirmed</option>
            <option>Declined</option>
          </select>

          <button onClick={addGuest}>Add Guest</button>
        </div>

        {/* GUEST LIST */}
        <div className="guest-list">
          {guests.map((guest, index) => (
            <div className="guest-card" key={index}>
              <div>
                <h4>{guest.name}</h4>
                <p>{guest.category}</p>
              </div>
              <span className={`status ${guest.status.toLowerCase()}`}>
                {guest.status}
              </span>
            </div>
          ))}
        </div>
      </div>

      <Footer/>
    </>
  );
}

export default GuestManagement;
