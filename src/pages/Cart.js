import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ShowPath from "../components/ShowPath";
import "../components/Cart.css";
import Button from "../components/Button";
import TextMhuuKrob from "../components/Input";
import { useSlotProps } from "@mui/base";

const Empty = () => {
  return <div>Cart is Empty</div>;
};

const ProductInCart = (props) => {
  return <a href="#"><img src={props.images}/></a>
}

const Cart = () => {
  return (
    <div>
      <Header />
      <ShowPath />
      <div className="cart">
        <div className="cart-header">
          <h1>Cart</h1>
        </div>
        <div className="cart-content">
          <div className="cart-l">
            <div className="product">Product</div>
            {JSON.parse(localStorage.getItem("cart")).map((cart) => {
              return (
                <div className="products">
                  <div className="products-img"><img src={cart.img} /></div>
                  <div className="products-name"><p>{cart.name}</p></div>
                </div>
              );
            })}
          </div>
          <div className="cart-r">
            <div className="product">Price</div>
            {JSON.parse(localStorage.getItem("cart")).map((cart) => {
              return (
                <div className="price-wrapper">
                  <div className="price">${cart.price}</div>
                  <div className="remove">Remove</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
