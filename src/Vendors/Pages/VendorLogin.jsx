import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {loginVendorAPI} from "../../Service/allAPIs";
import "../Vendor.css";

function VendorLogin() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleVendorLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await loginVendorAPI({ email, password });

      // save vendor token
      localStorage.setItem("vendorToken", res.data.token);
      localStorage.setItem("role", "vendor");

      alert("Vendor login successful ✅");
      navigate("/vendor/dashboard"); // ✅ CORRECT PLACE

    } catch (error) {
      if (error.response?.status === 403) {
        alert("⏳ Your account is pending admin approval");
      } else {
        alert(error.response?.data?.message || "Vendor login failed");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="vendor-login">
      <form onSubmit={handleVendorLogin}>
        <h2>Vendor Login</h2>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit" disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
}

export default VendorLogin;
