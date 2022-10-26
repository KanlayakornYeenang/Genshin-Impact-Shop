import React from "react";
import Navbar from "./Navbar";
import Logo from "./Logo";

// ส่วนบนของ HTML 

const Header = () => {
  return (
    <div className="nav-area">
      <Logo />
      <Navbar />
    </div>
  );
};

export default Header;
