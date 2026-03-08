import Navbar from "../../Components/Navabar/Navbar";
import "./Home.css";
import heroImg from "../../assets/victoria-priessnitz-JFAPl7brL6U-unsplash.jpg";
import aboutImg from "../../assets/CSP09464 2.JPG";
import Footer from "../../Components/Footer/Footer";
import herooImg from "../../assets/u_2ad3kll2vv-bride-8581643_1280.jpg";
import abouttImg from "../../assets/WhatsApp Image 2026-02-13 at 8.50.48 PM (1).jpeg";

function Home() {
  return (
    <>
      <Navbar />

      {/* HERO SECTION */}
      <section
        className="hero"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <div className="hero-overlay">
          <h1>
            Crafting Unforgettable Weddings,
            <br />
            Anywhere in the World
          </h1>

          <button className="hero-btn">Discover More</button>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="about-section">
        <div className="about-container">
          <div className="about-image">
            <img src={aboutImg} alt="Wedding" />
          </div>

          <div className="about-content">
            <h2>Where Dreams Meet Reality</h2>
            <p className="subtitle">
              A Journey of Love, Luxury, and Perfectly Orchestrated Moments
            </p>

            <p>
              WedVista transforms wedding dreams into breathtaking realities.
              We curate seamless and elegant celebrations tailored to your
              unique vision, style, and personality.
            </p>

            <p>
              From vendor coordination to budget planning and guest
              management, everything is beautifully organized in one place.
            </p>

            <button className="about-btn">Explore Services</button>
          </div>
        </div>
      </section>

      {/* PARALLAX BANNER */}
<section className="home-parallax">
  <div className="home-parallax-content">
    <h2>Designed to Reflect Your Love Story</h2>
    <p>Every detail curated with elegance and precision.</p>
  </div>
</section>


      {/* SERVICES SECTION */}
      <section className="services">
        <h2 className="section-title">What We’re Offering</h2>

        <div className="services-grid">
          <div className="service-card">
            <h3>Vendor Management</h3>
            <p>
              Discover and book trusted decorators, caterers, photographers,
              and more.
            </p>
          </div>

          <div className="service-card">
            <h3>Budget Planning</h3>
            <p>
              Track expenses smartly with real-time financial management tools.
            </p>
          </div>

          <div className="service-card">
            <h3>Guest Management</h3>
            <p>
              Organize your guest list, RSVPs, and invitations effortlessly.
            </p>
          </div>
          <div className="service-card">
            <h3>Event Coordination</h3>
            <p>
              Manage every aspect of your wedding day with seamless coordination.
            </p>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section
        className="cta"
        style={{ backgroundImage: `url(${herooImg})` }}
      >
        <div className="cta-overlay">
          <h2>
            Experience the Magic of Perfectly Planned Weddings
          </h2>
        </div>
      </section>

{/* CLASSIC FOUNDER SECTION */}
<section className="founder-section">
  <div className="founder-inner">

    <div className="founder-line"></div>

    <p className="founder-label">Founder’s Note</p>

    <h2 className="founder-heading">
      Creating Weddings That Feel Effortless,
      <br /> Yet Extraordinary.
    </h2>

    <div className="founder-image">
      <img src={abouttImg} alt="Founder Richy Shaji" />
    </div>

    <h3 className="founder-name">Richy Shaji</h3>

    <p className="founder-role">
      Founder & Creative Director, WedVista
    </p>

    <p className="founder-text">
      WedVista was born from a simple belief — that wedding planning should
      feel as joyful as the celebration itself. Our vision is to combine
      elegance with intelligent technology, allowing couples to focus on love
      while we handle the details.
    </p>

    <p className="founder-text">
      Every feature, every design choice, and every partnership is curated
      with care — because your wedding deserves nothing less than perfection.
    </p>

  </div>
</section>


      <Footer />
    </>
  );
}

export default Home;
