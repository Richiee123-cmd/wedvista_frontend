import { useEffect, useState } from "react";
import VendorSidebar from "../Components/VendorSideBar";
import {
  getVendorProfileAPI,
  updateVendorProfileAPI,
} from "../../Service/allAPIs"; // adjust path if needed
import "../Vendor.css";

function VendorProfile() {
  const [form, setForm] = useState({
    name: "",
    serviceType: "",
    phone: "",
    address: "",
    description: "",
    experience: "",
    priceRange: "",
  });

  const [loading, setLoading] = useState(true);

  // 🔹 Fetch profile
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await getVendorProfileAPI();

        setForm({
          name: res.data.name || "",
          serviceType: res.data.serviceType || "",
          phone: res.data.phone || "",
          address: res.data.address || "",
          description: res.data.description || "",
          experience: res.data.experience || "",
          priceRange: res.data.priceRange || "",
        });

        setLoading(false);
      } catch (error) {
        alert("Failed to load profile");
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSave = async () => {
    try {
      await updateVendorProfileAPI(form);
      alert("Profile updated successfully ✅");
    } catch (error) {
      alert("Profile update failed ❌");
    }
  };

  if (loading) return <p>Loading profile...</p>;

  return (
    <div className="vendor-layout">
      <VendorSidebar />

      <main className="vendor-content">
        <h1>Vendor Profile</h1>

        {/* Business Info */}
        <div className="profile-section">
          <h3>Business Information</h3>

          <label>Business Name</label>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
          />

          <label>Service Type</label>
          <input value={form.serviceType} disabled />
        </div>

        {/* Contact Info */}
        <div className="profile-section">
          <h3>Contact Details</h3>

          <label>Phone Number</label>
          <input
            name="phone"
            value={form.phone}
            onChange={handleChange}
          />

          <label>Location</label>
          <input
            name="address"
            value={form.address}
            onChange={handleChange}
          />
        </div>

        {/* About */}
        <div className="profile-section">
          <h3>About Your Service</h3>

          <label>Description</label>
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
          />

          <label>Years of Experience</label>
          <input
            name="experience"
            value={form.experience}
            onChange={handleChange}
          />

          <label>Price Range</label>
          <input
            name="priceRange"
            value={form.priceRange}
            onChange={handleChange}
          />
        </div>

        <button className="save-btn" onClick={handleSave}>
          Save Profile
        </button>
      </main>
    </div>
  );
}

export default VendorProfile;
