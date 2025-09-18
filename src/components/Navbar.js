import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo">
        <img src="https://cdn-icons-png.flaticon.com/512/747/747376.png" alt="logo" />
        <div>
          <span>Appaim</span>
          <small>THINGS SOLUTION</small>
        </div>
      </div>

      {/* Nav Links */}
      <div className="nav-links">
        <a href="#about" className="active">About</a>
        <a href="#support">Support areas</a>
        <a href="#contact">Contact Us</a>
      </div>

      {/* Language */}
      <div className="lang">
        <img src="https://flagcdn.com/w20/us.png" alt="USA" />
        <span>English (USA)</span>
      </div>
    </nav>
  );
};

export default Navbar;
