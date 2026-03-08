import "./Footer.css";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Brand */}
        <div className="footer-brand">
          <h2>WedVista</h2>
          <div className="footer-divider"></div>
          <p>
            WedVista is your all-in-one wedding planning platform designed to
            simplify planning, manage budgets, and connect you with trusted
            wedding vendors.
          </p>

          {/* Social Icons */}
          <div className="footer-social">
            <Facebook />
            <Instagram />
            <Twitter />
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/vendors">Vendors</Link></li>
            <li><Link to="/budget">Budget Planner</Link></li>
            <li><Link to="/guests">Guest Management</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div className="footer-links">
          <h4>Wedding Services</h4>
          <ul>
            <li>Decorations</li>
            <li>Catering</li>
            <li>Photography</li>
            <li>Makeup Artists</li>
            <li>Venues</li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-contact">
          <h4>Contact Us</h4>
          <p>Email: support@wedvista.com</p>
          <p>Phone: +91 98765 43210</p>
          <p>Location: India</p>
        </div>

      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        <p>© 2025 WedVista. Crafted with elegance & love.</p>
      </div>
    </footer>
  );
}

export default Footer;