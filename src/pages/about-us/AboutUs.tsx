import React from "react";
import "./AboutUs.css";

const AboutUs: React.FC = () => {
  return (
    <div className="about-page">
      {/* 🔹 Navbar (not fixed) */}
      <nav className="about-navbar">
        {/* <div className="logo">Sukriti Cultural Association</div> */}

        <div className="nav-links">
          <a href="#about">Sukriti Cultural Association</a>
          <a href="#team">Our Team</a>
          <a href="#membership">Membership</a>
        </div>
      </nav>

      {/* 🔸 About Section */}
      <section id="about" className="section">
        <h2>About Sukriti Cultural Association</h2>
        <p>
          Sukriti Cultural Association is a vibrant community dedicated to
          celebrating culture, tradition, and togetherness. Established in 2016,
          we organize various cultural events including Durga Puja, Saraswati
          Puja, Anandamela, and multiple social initiatives.
        </p>
      </section>

      {/* 🔸 Team Section */}
      <section id="team" className="section">
        <h2>Our Team</h2>

        <div className="team-grid">
          <div className="team-card">
            <h3>President</h3>
            <p>Member Name</p>
          </div>

          <div className="team-card">
            <h3>Secretary</h3>
            <p>Member Name</p>
          </div>

          <div className="team-card">
            <h3>Treasurer</h3>
            <p>Member Name</p>
          </div>

          <div className="team-card">
            <h3>Committee Members</h3>
            <p>Details here...</p>
          </div>
        </div>
      </section>

      {/* 🔸 Membership Section */}
      <section id="membership" className="section">
        <h2>Membership</h2>

        <p>
          Become a member of Sukriti Cultural Association and enjoy exclusive
          benefits:
        </p>

        <ul>
          <li>Participation in all cultural events</li>
          <li>Special access to community gatherings</li>
          <li>Networking opportunities</li>
          <li>Contribution to social activities</li>
        </ul>

        <h3>How to Join?</h3>
        <p>
          Contact our team or fill out the membership form available on the
          website. Membership is open for all cultural enthusiasts.
        </p>
      </section>
    </div>
  );
};

export default AboutUs;
