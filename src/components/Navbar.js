import React from "react";
import { useState } from "react";
import { RiArrowDropDownFill } from "react-icons/ri";
import { FaSearch } from "react-icons/fa";
import { TiShoppingCart } from "react-icons/ti";
import { accessories, apparel, collectibles } from "../data/menuItems";

const Tabs = (props) => {
  const [isHovering, setIsHovering] = useState(false);
  const handleMouseOut = () => {
    setIsHovering(false);
  };
  return (
    <div className="tabs">
      <a href={props.url} onMouseOver={handleMouseOut}>
        <div className="menu-items">{props.title}</div>
      </a>
    </div>
  );
};

const TabsExpends = (props) => {
  const [isHovering, setIsHovering] = useState(false);
  const handleMouseOver = () => {
    setIsHovering(true);
  };
  const handleMouseOut = () => {
    setIsHovering(false);
  };
  const Expends = (props) => {
    return (
      <div className="expends">
        <div className="expends_item">
          <a href="#">Shop All</a>
        </div>
        <div className="expends_item">
          {props.menu.map((menu, index) => {
            return <a href={menu.url}>{menu.title}</a>;
          })}
        </div>
        <div className="expends_item_img">
          {props.menu[props.menu.length - 1].pic.map((pic) => (
            <img src={pic} />
          ))}
          {props.menu[props.menu.length - 1].pictitle.map((pictitle) => (
            <p>{pictitle}</p>
          ))}
        </div>
      </div>
    );
  };
  return (
    <div>
      <a
        href={props.url}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        <div className="menu-items">
          {props.title}
          <RiArrowDropDownFill style={{ color: "#444444", fontSize: "2vw" }} />
        </div>
      </a>
      {isHovering ? (
        <div
          className="dropdown"
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          <Expends menu={props.menu} />
        </div>
      ) : null}
    </div>
  );
};

const Navbar = () => {
  return (
    <nav>
      <div className="tab-wrapper">
        <TabsExpends url="/apparel" title="APPAREL" menu={apparel} />
        <TabsExpends
          url="/collectibles"
          title="COLLECTIBLES"
          menu={collectibles}
        />
        <TabsExpends
          url="/accessories"
          title="ACCESSORIES"
          menu={accessories}
        />
        <Tabs url="/sale" title="SALE" link="/Sale" />
      </div>

      <div className="action-wrapper">
        <div id="search-wrapper">
          <input id="search" type="text" placeholder="SEARCH" />
          <FaSearch style={{ color: "#ffffff", fontSize: "0.85vw" }} />
        </div>
        <div id="cart-wrapper">
          <TiShoppingCart style={{ color: "#ffffff", fontSize: "1.5vw" }} />
        </div>
        <Tabs url="/signin" title="SIGN IN" />
      </div>
    </nav>
  );
};

export default Navbar;
