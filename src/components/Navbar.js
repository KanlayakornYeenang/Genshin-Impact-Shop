import React from "react";
import { RiArrowDropDownFill } from "react-icons/ri";
import { TiShoppingCart } from "react-icons/ti";
import { accessories, apparel, collectibles } from "../data/menuItems";
<<<<<<< HEAD
import PopUp from "./PopUp";
=======
import PopUpSignIn from "./PopUpSignIn";
import {tops, bottoms, sales, badges, pins, standees, plush, mugs, figures, keychains, mousepads} from "../data/ProductList";
import SearchProduct from "./SearchProduct";
>>>>>>> b19a353a19a4ec7a317e41e01a82bb4589488ace

// แถบ Navigator ด้านบนที่จะอยู่ในทุกๆหน้าและจะแสดง Catagories ทุกๆชนิด



export const Tabs = (props) => {
  const [isHovering, setIsHovering] = React.useState(false);
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
  const [isHovering, setIsHovering] = React.useState(false);
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
  const [searchProduct, setSearchProduct] = useState('');

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
        <SearchProduct value={searchProduct} onValueChange={setSearchProduct}/>
        <a id="cart-wrapper" href="/cart">
          <TiShoppingCart style={{ color: "#ffffff", fontSize: "1.5vw" }} />
        </a>
        <PopUp />
      </div>
    </nav>
  );
};


export default Navbar;
