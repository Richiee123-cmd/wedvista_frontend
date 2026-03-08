import { useNavigate } from "react-router-dom";
import Navbar from "../../Components/Navabar/Navbar";
import "./Services.css";
import heroBg from "../../assets/bride-with-white-wedding-bride.jpg";
import Footer from "../../Components/Footer/Footer"

import venueImg from "../../assets/venue.jpg";
import cateringImg from "../../assets/ibrahim-boran-m8YjB0noWiY-unsplash.jpg";
import photoImg from "../../assets/ikshana-productions--xVpsIaq5MA-unsplash.jpg";
import stylingImg from "../../assets/rajat-sarki-NvuOJFK53sE-unsplash.jpg";
import decorImg from "../../assets/decoration.jpg";
import musicImg from "../../assets/music.jpg";

const services = [
  { title: "Venue", image: venueImg },
  { title: "Catering", image: cateringImg },
  { title: "Photography", image: photoImg },
  { title: "makeup-artist", image: stylingImg },
  { title: "Decoration & Theme Design", image: decorImg },
  { title: "Music & Entertainment", image: musicImg },
];

function Services() {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />

      {/* HERO SECTION */}
      <section
        className="services-hero"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="services-overlay">
          <h1>Services</h1>
        </div>
      </section>

      {/* SERVICES LIST */}
      <section className="services-section">
        <p className="small-heading">Services List</p>
        <h2 className="main-heading">What We’re Offering</h2>

        <div className="services-grid">
          {services.map((service, index) => (
            <div
              className="service-card"
              key={index}
              onClick={() =>
                navigate(
                  `/services/${service.title
                    .toLowerCase()
                    .replace(/\s+/g, "-")}`
                )
              }
            >
              <div className="service-image">
                <img src={service.image} alt={service.title} />
              </div>

              <div className="service-content">
                <h3>{service.title}</h3>
                <p>
                  Discover trusted professionals and curated services tailored
                  for your dream wedding.
                </p>

                <button
                  className="service-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate(
                      `/services/${service.title
                        .toLowerCase()
                        .replace(/\s+/g, "-")}`
                    );
                  }}
                >
                  Explore Vendors
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Footer/>
    </>
  );
}

export default Services;
