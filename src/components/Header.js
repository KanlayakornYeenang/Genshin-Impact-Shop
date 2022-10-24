import React from "react";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div className="nav-area">
      <img id="logo" src="/images/genshin-impact-store-logo.png" />
      {/* Header.js => Navbar.js */}
      <Navbar />
    </div>
  );
};

export default Header;
