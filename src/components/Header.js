import React from "react";
import Navbar from "./Navbar";
import logo from "./images/ghenshin-impact-store-logo.png";

const Header = () => {
  return (
    <div className="nav-area">
      <img id="logo" src="/images/1.jpg" />
      {/* Header.js => Navbar.js */}
      <Navbar />
    </div>
  );
};

export default Header;
