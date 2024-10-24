import React from 'react';
import { FaSave, FaCog, FaEye, FaThumbtack } from 'react-icons/fa'; // Import Font Awesome icons
import '../styles/Navbar.css'; // Import the CSS file

const Navbar = () => {
  return (
    <div className="navbar-container">
      <h1>CodePen Clone</h1>
      <div className="navbar-icons">
        <div className="navbar-icon">
          <FaSave /> {/* Save Icon */}
          <span className="icon-text">Save</span> {/* Save text */}
        </div>
        <div className="navbar-icon">
          <FaCog /> {/* Settings Icon */}
          <span className="icon-text">Settings</span> {/* Settings text */}
        </div>
        <div className="navbar-icon">
          <FaThumbtack /> {/* Pin Icon */}
          <span className="icon-text">Pin</span> {/* Pin text */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
