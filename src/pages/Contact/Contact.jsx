import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navabar/Navbar";
import "./Contact.css";

function Contact() {
  return (
    <>
      <Navbar />

      {/* HERO SECTION */}
      <section className="contact-hero">
        <div className="hero-overlay">
          <h1>Contact Admin</h1>
          <p>
            Facing any issue or have questions? Reach out to us — we're here to help.
          </p>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="contact-container">
        {/* FORM */}
        <form className="contact-form">
          <h2>Send Your Message</h2>

          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Email Address" required />

          <select>
            <option>General Query</option>
            <option>Technical Issue</option>
            <option>Booking Problem</option>
            <option>Payment Issue</option>
            <option>Feedback</option>
          </select>

          <textarea
            placeholder="Describe your issue or message..."
            rows="5"
          />

          <button type="submit">Submit Message</button>
        </form>

        {/* INFO */}
        <div className="contact-info">
          <h3>Admin Support</h3>
          <p>Email: support@wedvista.com</p>
          <p>Phone: +91 98765 43210</p>
          <p>Working Hours: 9:00 AM – 6:00 PM</p>
        </div>
      </section>
      <Footer/>
    </>
  );
}

export default Contact;
