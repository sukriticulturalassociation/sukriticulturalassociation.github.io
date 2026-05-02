import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/sukriticulturalassociation.png";

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    "Home",
    "Event Calendar",
    "Durga Puja 2025",
    "Sponsors",
    "Good Works",
    "Contact",
    "About Us",
  ];

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Left: Logo + Title */}
        <div className="navbar-left">
          <img src={logo} alt="logo" className="logo" />
          <span className="site-title">Sukriti Cultural Association</span>
        </div>

        {/* Center: Menu */}
        <div className={`navbar-center ${menuOpen ? "active" : ""}`}>
          {navItems.map((item) => (
            <a
              key={item}
              href={`${item.toLowerCase().replace(" ", "-")}`}
              className="nav-link"
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </a>
          ))}
        </div>

        {/* Right: Hamburger */}
        <div
          className={`hamburger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span />
          <span />
          <span />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
