import React from "react";
import "./Footer.css";


// ส่วนล่างของ HTML 

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-logo-img">
        <img src="/images/genshin-impact-store-logo.png" />
      </div>
      <div className="footer-text-frame">
        <div className="footer-shop-frame">
          <h2 className="footer-title">Shop</h2>
          <div className="shop-frame-content">
            <a href="/apparel/tops"><p>TOPS</p></a>
            <a href="/apparel/bottoms"><p>BOTTOMS</p></a>
            <a href="/collectibles/badges"><p>BADGES</p></a>
            <a href="/collectibles/standees"><p>STANDEES</p></a>
            <a href="/collectibles/pins"><p>PINS</p></a>
            <a href="/collectibles/plush"><p>PLUSH</p></a>
            <a href="/collectibles/figures"><p>FIGURES</p></a>
            <a href="/collectibles/keychains"><p>KEYCHAINS</p></a>
            <a href="/accessories/mugs"><p>MUGS</p></a>
            <a href="/accessories/mousepads"><p>MOUSE PADS</p></a>
            <a href="/sale"><p>SALE</p></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
