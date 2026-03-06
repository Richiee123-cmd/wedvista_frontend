import { useState } from "react";
import { registerVendorAPI } from "../../Service/allAPIs";
import { useNavigate } from "react-router-dom";

function VendorRegister() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    serviceType: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      await registerVendorAPI(formData);
      alert("Registered successfully! Wait for admin approval ⏳");
      navigate("/vendor/login");
    } catch (error) {
      alert(error.response?.data?.message || "Registration failed");
    }
  };

  return (
    <>
      <style>{`
        body {
          margin: 0;
          font-family: 'Playfair Display', serif;
          background: linear-gradient(to right, #fdfcfb, #e2d1c3);
        }

        .vendor-register-container {
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .vendor-form {
          background: #ffffff;
          padding: 40px;
          width: 400px;
          border-radius: 15px;
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
          text-align: center;
          transition: 0.3s ease;
        }

        .vendor-form:hover {
          transform: translateY(-5px);
        }

        .vendor-form h2 {
          margin-bottom: 25px;
          color: #b76e79;
          font-size: 28px;
          letter-spacing: 1px;
        }

        .vendor-form input,
        .vendor-form select {
          width: 100%;
          padding: 12px 15px;
          margin: 10px 0;
          border-radius: 8px;
          border: 1px solid #ddd;
          font-size: 14px;
          transition: 0.3s ease;
          outline: none;
        }

        .vendor-form input:focus,
        .vendor-form select:focus {
          border-color: #b76e79;
          box-shadow: 0 0 8px rgba(183, 110, 121, 0.3);
        }

        .vendor-form button {
          width: 100%;
          padding: 12px;
          margin-top: 15px;
          border: none;
          border-radius: 8px;
          background: linear-gradient(45deg, #b76e79, #d4a5a5);
          color: white;
          font-size: 16px;
          font-weight: bold;
          cursor: pointer;
          transition: 0.3s ease;
        }

        .vendor-form button:hover {
          background: linear-gradient(45deg, #a55d68, #c08d8d);
          transform: scale(1.03);
        }

        .vendor-form button:active {
          transform: scale(0.98);
        }
      `}</style>

      <div className="vendor-register-container">
        <form className="vendor-form" onSubmit={handleRegister}>
          <h2>Vendor Register</h2>

          <input
            name="name"
            placeholder="Vendor Name"
            onChange={handleChange}
            required
          />

          <input
            name="email"
            type="email"
            placeholder="Email"
            onChange={handleChange}
            required
          />

          <input
            name="password"
            type="password"
            placeholder="Password"
            onChange={handleChange}
            required
          />

          <select name="serviceType" onChange={handleChange} required>
            <option value="">Select Service</option>
            <option value="photographer">Photographer</option>
            <option value="hall">Wedding Hall</option>
            <option value="makeup">Makeup Artist</option>
          </select>

          <button type="submit">Register</button>
        </form>
      </div>
    </>
  );
}

export default VendorRegister;
