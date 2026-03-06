import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "../../Components/Navabar/Navbar";
import "./ServiceVentors.css";

function ServiceVendors() {
  const params = useParams();
  const type = params.type;
  const navigate = useNavigate();

  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  // Guard
  if (!type) {
    return (
      <>
        <Navbar />
        <div className="service-page">
          <h2>Invalid service type</h2>
          <button
            className="book-btn"
            onClick={() => navigate("/services")}
          >
            Go Back
          </button>
        </div>
      </>
    );
  }

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5000/api/services?type=${type}`
        );
        setServices(res.data);
      } catch (error) {
        alert("Failed to load vendors");
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, [type]);

  return (
    <>
      <Navbar />
      <div className="service-page">
        <h1 className="service-title">
          {type.replace("-", " ")} Vendors
        </h1>

        {loading && (
          <p className="status-text">Loading...</p>
        )}

        {!loading && services.length === 0 && (
          <p className="status-text">
            No vendors available
          </p>
        )}

        <div className="vendors-grid">
          {services.map((service) => (
            <div
              className="vendor-card"
              key={service._id}
            >
              <h3 className="vendor-title">
                {service.title}
              </h3>

              <p className="vendor-price">
                ₹{service.price}
              </p>

              <div className="vendor-images">
                {service.images?.map(
                  (img, index) => (
                    <img
                      key={index}
                      src={`http://localhost:5000${img}`}
                      alt="vendor"
                    />
                  )
                )}
              </div>

              <button
                className="book-btn"
                onClick={() =>
                  navigate("/book", {
                    state: {
                      vendorId:
                        typeof service.vendor ===
                        "object"
                          ? service.vendor._id
                          : service.vendor,
                      serviceId: service._id,
                      serviceTitle:
                        service.title,
                    },
                  })
                }
              >
                Book Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default ServiceVendors;
