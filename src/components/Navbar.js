import React, { useState } from "react";
import "../css/Navbar.css";

const Navbar = () => {
  const [hoverText, setHoverText] = useState({
    work: "Work",
    studios: "Studios",
    recognition: "Recognition"
  });

  const handleMouseEnter = (key, text) => {
    setHoverText(prevState => ({
      ...prevState,
      [key]: text
    }));
  };

  const handleMouseLeave = (key, defaultText) => {
    setHoverText(prevState => ({
      ...prevState,
      [key]: defaultText
    }));
  };

  return (
    <header className="navbar-container">
      <div className="logo">
        <h1 className="logoHead">We are</h1>
        <img 
          src="https://res.cloudinary.com/dcbyjmsdq/image/upload/v1729232870/favicon_1_ynsf8l.ico" 
          alt="Logo" 
          className="logo-image"
        />
      </div>
      <nav className="navbar">
        <ul>
          <li
            className="nav-item"
            onMouseEnter={() => handleMouseEnter('work', 'Hard')}
            onMouseLeave={() => handleMouseLeave('work', 'Work')}
          >
            <a href="#work">{hoverText.work}</a>
          </li>
          <li
            className="nav-item"
            onMouseEnter={() => handleMouseEnter('studios', 'Play Harder')}
            onMouseLeave={() => handleMouseLeave('studios', 'Studios')}
          >
            <a href="#work">{hoverText.studios}</a>
          </li>
          <li
            className="nav-item"
            onMouseEnter={() => handleMouseEnter('recognition', 'Yeah!')}
            onMouseLeave={() => handleMouseLeave('recognition', 'Recognition')}
          >
            <a href="#work">{hoverText.recognition}</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
