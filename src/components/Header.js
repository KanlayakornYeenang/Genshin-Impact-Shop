import React from "react";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div className="nav-area">
      <a href="/"><img id="logo" src="/images/genshin-impact-store-logo.png" /></a>
      <Navbar />
    </div>
  );
};

export default Header;
