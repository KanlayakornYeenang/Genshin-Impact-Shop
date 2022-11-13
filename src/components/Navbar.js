import React from "react";
import { useState } from "react";
import { RiArrowDropDownFill } from "react-icons/ri";
import { FaSearch } from "react-icons/fa";
import { TiShoppingCart } from "react-icons/ti";
import { accessories, apparel, collectibles } from "../data/menuItems";
import PopUpSignIn from "./PopUpSignIn";

// แถบ Navigator ด้านบนที่จะอยู่ในทุกๆหน้าและจะแสดง Catagories ทุกๆชนิด

export const Tabs = (props) => {
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
          <a href={props.url}>Shop All</a>
        </div>
        <div className="expends_item">
          {props.menu.map((menu, index) => {
            return <a href={menu.url}>{menu.title}</a>;
          })}
        </div>
        {props.menu.slice(props.menu.length - 2).map((data) => (
          <a href={data.url} className="expends_item_img">
            <img src={data.pic} />
            <p>{data.pictitle}</p>
          </a>
        ))}
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
          <Expends menu={props.menu} url={props.url}/>
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
        <a id="cart-wrapper" href="/cart">
          <TiShoppingCart style={{ color: "#ffffff", fontSize: "1.5vw" }} />
        </a>
        <PopUpSignIn />
      </div>
    </nav>
  );
};

export default Navbar;
