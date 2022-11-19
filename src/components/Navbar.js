import React,{useState, useEffect} from 'react';
import { RiArrowDropDownFill } from "react-icons/ri";
import { BiUser } from "react-icons/bi";
import { TiShoppingCart } from "react-icons/ti";
import { BsCircleFill } from "react-icons/bs";
import { accessories, apparel, collectibles } from "../data/menuItems";
import AccountModal from "./AccountModal";
import SearchProduct from "./SearchProduct";
import {
  tops,
  bottoms,
  sales,
  badges,
  pins,
  standees,
  plush,
  mugs,
  figures,
  keychains,
  mousepads,
} from "../data/ProductList";
import Product from "./Product";

// แถบ Navigator ด้านบนที่จะอยู่ในทุกๆหน้าและจะแสดง Catagories ทุกๆชนิด

const UserTab = (props) => {
  const [isUserTabHovering, setIsUserTabHovering] = useState(false);
  const handleMouseOver = () => {
    setIsUserTabHovering(true);
  };
  const handleMouseOut = () => {
    setIsUserTabHovering(false);
  };
  const logout = () => {
    localStorage.removeItem("User");
    window.location.reload(false);
  };
  return (
    <div className="usertab">
      <a
        href={props.url}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        <div className="menu-items">
          <BiUser style={{ fontSize: "1.4vw", transform: "translateY(-5%)" }} />{" "}
          &nbsp;
          {props.title}
          <RiArrowDropDownFill style={{ color: "#444444", fontSize: "2vw" }} />
        </div>
      </a>
      {isUserTabHovering ? (
        <div
          className="usertab-dropdown"
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
          onClick={logout}
        >
          <div className="logout" onMouseOver={handleMouseOver}>
            <p>LOG OUT</p>
          </div>
        </div>
      ) : null}
    </div>
  );
};

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
            return (
              <a key={index} href={menu.url}>
                {menu.title}
              </a>
            );
          })}
        </div>
        {props.menu.slice(props.menu.length - 2).map((data, index) => (
          <a key={index} href={data.url} className="expends_item_img">
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
          <Expends menu={props.menu} url={props.url} />
        </div>
      ) : null}
    </div>
  );
};

const Navbar = () => {
  var Products = tops.concat(
    bottoms,
    sales,
    badges,
    pins,
    standees,
    plush,
    mugs,
    figures,
    keychains,
    mousepads
  );
  const [searchProduct, setSearchProduct] = useState("");
  const filteredProduct = Products.filter((product) => {
    return product.name.toLowerCase().includes(searchProduct.toLowerCase());
  });
  const productElementsSearch = filteredProduct
    .slice(0, 4)
    .map((list, index) => {
      return (
        <div>
          <Product key={index} list={list} />
        </div>
      );
    });

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
        <Tabs url="/sale" title="SALE" />
      </div>

      <div className="action-wrapper">
        <SearchProduct value={searchProduct} onValueChange={setSearchProduct} />
        {filteredProduct.length == 0 ? (
          <div
            className="search-content-wrapper"
            style={{ color: "white", height: "20vh", zIndex: "2" }}
          >
            No Result
          </div>
        ) : null}
        {searchProduct == "" ? null : (
          <div className="search-content-wrapper" style={{ zIndex: "1" }}>
            <div className="search-content">{productElementsSearch}</div>
            <div style={{ width: "20%" }}>
              <a href={"/search/" + searchProduct} className="var">
                View All Results ({filteredProduct.length})
              </a>
            </div>
          </div>
        )}
        <a id="cart-wrapper" href="/cart">
          <TiShoppingCart style={{ color: "#ffffff", fontSize: "1.5vw" }} />
          {/* <BsCircleFill
            style={{
              color: "#d13639",
              fontSize: "0.5vw",
              position: "absolute",
              transform: "translate(-0.45vw, 0.1vw)",
              boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
            }}
          /> */}
        </a>
        {/* <AccountModal /> */}
        {localStorage.getItem("User") == null ? (
          <AccountModal />
        ) : (
          <UserTab
            title={localStorage
              .getItem("User")
              .slice(1, localStorage.getItem("User").length - 1)}
          />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
