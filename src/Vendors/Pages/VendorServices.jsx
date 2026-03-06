import { useEffect, useState } from "react";
import axios from "axios";
import VendorSidebar from "../Components/VendorSideBar";

function VendorServices() {

  const token = localStorage.getItem("vendorToken");

  const [services, setServices] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [images, setImages] = useState([]);

  // ⭐ FETCH MY SERVICES
  const fetchServices = async () => {
    try {
      const res = await axios.get(
        "http://localhost:5000/api/services/my",
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      setServices(res.data);

    } catch (error) {
      alert("Failed to load services");
    }
  };

  useEffect(() => {
    fetchServices();
  }, []);

  // ⭐ ADD SERVICE
  const handleAddService = async () => {
    try {

      const formData = new FormData();

      formData.append("title", title);
      formData.append("description", description);
      formData.append("price", price);
      formData.append("category", category);

      for (let i = 0; i < images.length; i++) {
        formData.append("images", images[i]);
      }

      await axios.post(
        "http://localhost:5000/api/services",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data"
          }
        }
      );

      alert("Service Added");
      fetchServices();

      setTitle("");
      setDescription("");
      setPrice("");
      setCategory("");
      setImages([]);

    } catch (error) {
      alert("Failed to add service");
    }
  };

  // ⭐ DELETE SERVICE
  const handleDelete = async (id) => {
    await axios.delete(
      `http://localhost:5000/api/services/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );

    fetchServices();
  };

  return (
    <div className="vendor-layout">

      <VendorSidebar />

      <main className="vendor-content">

        <h1 className="page-title">My Services</h1>

        {/* ADD SERVICE CARD */}
        <div className="service-form-card">

          <h2>Add New Service</h2>

          <input
            placeholder="Service Title"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />

          <textarea
            placeholder="Service Description"
            value={description}
            onChange={e => setDescription(e.target.value)}
          />

          <input
            placeholder="Price (₹)"
            value={price}
            onChange={e => setPrice(e.target.value)}
          />

          <select
            value={category}
            onChange={e => setCategory(e.target.value)}
          >
            <option value="">Select Category</option>
            <option value="makeup-artist">Makeup</option>
            <option value="photography">Photography</option>
            <option value="catering">Catering</option>
            <option value="venue">Venue</option>
          </select>

          <input
            type="file"
            multiple
            onChange={e => setImages(e.target.files)}
          />

          <button className="add-btn" onClick={handleAddService}>
            Add Service
          </button>

        </div>

        {/* SERVICES GRID */}
        <div className="services-grid">

          {services.map(service => (

            <div key={service._id} className="service-card">

              <div className="service-images">
                {service.images?.map(img => (
                  <img
                    key={img}
                    src={`http://localhost:5000${img}`}
                    alt="service"
                  />
                ))}
              </div>

              <div className="service-info">
                <h3>{service.title}</h3>
                <p className="price">₹{service.price}</p>

                <button
                  className="delete-btn"
                  onClick={() => handleDelete(service._id)}
                >
                  Delete
                </button>
              </div>

            </div>

          ))}

        </div>

      </main>

    </div>
  );
}

export default VendorServices;
