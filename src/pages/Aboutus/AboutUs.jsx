import "./AboutUs.css";
import aboutImg from "../../assets/wedding-rings-1284225_1280.jpg";

function About() {
  return (
    <section className="about-page">
      <div className="about-container">

        {/* Left Content */}
        <div className="about-content">
          <h1>About WedVista</h1>
          <div className="about-divider"></div>

          <p className="about-desc">
            WedVista is a modern wedding planning platform created to make your
            special day stress-free and beautifully organized. From managing
            vendors to tracking budgets and guests, we help couples plan with
            clarity, confidence, and joy.
          </p>

          <p className="about-desc">
            We believe every wedding is unique, and our platform adapts to your
            style, traditions, and budget — so you can focus on celebrating love
            while we handle the planning.
          </p>

          <button className="about-btn">Discover More</button>
        </div>

        {/* Right Image */}
        <div className="about-image">
          <img src={aboutImg} alt="Wedding Planning" />
        </div>

      </div>
    </section>
  );
}

export default About;
