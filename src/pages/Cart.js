import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ShowPath from "../components/ShowPath";
import "../components/Cart.css";
import Button from "../components/Button";
import Accordion from "../components/Accordion";

const Empty = () => {
  return <div>Cart is Empty</div>;
};

const Cart = () => {
  return (
    <div>
      <Header />
      <ShowPath />
      <div className="cart-frame">
        <div className="cart-left">
          <div className="cart-left-wrapper">
            <h1>Cart (0)</h1>
          </div>
          <div className="table">
            <div className="table-header">
              <div className="table-left">Product</div>
              <div className="table-right">Price</div>
            </div>
            <div className="cart-product">
              <Empty />
            </div>
          </div>
          <Button string={"/ Start Shopping Now"} />
        </div>
        <div className="cart-right">
            <div className="cart-right-frame">
                <p>Subtotal (0 items)</p>
                <p className="cart-price">$0.00</p>
                <Accordion />
                <p style={{fontSize:"0.8vw"}}>*Item availability isn’t guaranteed until checkout is complete.</p>
            </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
