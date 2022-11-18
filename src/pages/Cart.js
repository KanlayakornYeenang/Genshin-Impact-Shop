import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ShowPath from "../components/ShowPath";
import "../components/Cart.css";
import Button from "../components/Button";
import TextMhuuKrob from "../components/Input";
import { useSlotProps } from "@mui/base";
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';

const Empty = () => {
  return <div>Cart is Empty</div>;
};

const removeFromCart = () => {

}

const Cart = () => {
  return (
    <div>
      <Header />
      <ShowPath />
      <div className="cart">
        <div className="cart-header">
          <h1>Cart ({JSON.parse(localStorage.getItem("cart")).length})</h1>
        </div>
        <div className="cart-table-header">
          <p>Product</p>
          <p>Price</p>
        </div>
          {JSON.parse(localStorage.getItem("cart")).map((cart) => {
            return (
              <div className="products-wrapper">
                <a href={cart.url} className="cart-img">
                  <img src={cart.img} />
                </a>
                <div className="cart-name">
                  <p>{cart.name}</p>
                  <FormControl fullWidth>
                    <InputLabel
                      variant="standard"
                      htmlFor="uncontrolled-native"
                    >
                      Qty
                    </InputLabel>
                    <NativeSelect
                      defaultValue={cart.amount}
                      sx={{width:"15%"}}
                    >
                      <option value={1}>1</option>
                      <option value={2}>2</option>
                      <option value={3}>3</option>
                      <option value={4}>4</option>
                      <option value={5}>5</option>
                    </NativeSelect>
                  </FormControl>
                </div>
                <div className="cart-price">
                  <p>${(cart.price*cart.amount).toFixed(2)}</p>
                  <p style={{ textDecoration: "underline", cursor:"pointer" }} onClick={removeFromCart}>Remove</p>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Cart;
