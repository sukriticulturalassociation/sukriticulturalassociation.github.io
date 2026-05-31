import React, { useState } from "react";
import logo from "../../assets/sukriticulturalassociation.png";
import "./NavbarV2.css";

const NavbarV2: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = ["Home","About Us", "Activities", "Events", "Join Us"];

  return (
    <nav className="navbar">
      {/* Left - Logo */}
      <div className="navbar-left">
        <img src={logo} alt="logo" className="logo" />
        <span className="brand">Sukriti Cultural Association</span>
      </div>

      {/* Desktop Menu */}
      <div className="navbar-right">
        {menuItems.map((item) => (
          <a key={item} href={`${item.toLowerCase().replace(" ", "-")}`}>
            {item}
          </a>
        ))}
      </div>

      {/* Mobile Menu Icon */}
      <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="mobile-menu">
          {menuItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(" ", "")}`}
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default NavbarV2;
