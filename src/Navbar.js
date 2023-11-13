// Navbar.jsx

import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo-container"></div>
      <span className="nav-link">Home</span>
      <span className="nav-link">Contact Us</span>
      <span className="nav-link">About Us</span>
      <span className="nav-link">Service</span>
    </div>
  );
};

export default Navbar;
