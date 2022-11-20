import React, {useState} from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ShowPath from "../components/ShowPath";
import "../components/Cart.css";
import Button from "../components/Button";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";

const removeFromCart = (cart) => {
  JSON.parse(localStorage.getItem("cart")).map((carts, index) => {
    if (
      cart.name == carts.name &&
      cart.amount == carts.amount &&
      cart.size == carts.size
    ) {
      const arr = JSON.parse(localStorage.getItem("cart"));
      arr.splice(index, 1);
      localStorage.setItem("cart", JSON.stringify(arr));
      localStorage.setItem("cartlength", localStorage.getItem("cartlength")-1);
      window.location.reload(false);
    }
  });
};

const Price = (props) => {
  return (<p>${(props.amount*props.price).toFixed(2)}</p>)
}

const Cart = () => {
  const [currentAmount, setCurrentAmount] = useState(0)
  const handleChange = (event, num) =>{
    const currentCart = JSON.parse(localStorage.getItem('cart'));
    const carts = [];
    currentCart.map((data, index) =>{
      carts.splice(index, 0, data);
    })
    carts.map((data, index)=>{
      if(index == num){
        carts.splice(index, 1, {
          amount: parseInt(event.target.value),
          name:data.name,
          price:data.price,
          img: data.img,
          size: data.size,
          url: data.url,
        })
        setCurrentAmount(carts[index].amount)
      }else{
        carts.splice(index, 1, {
          amount: data.amount,
          name:data.name,
          price:data.price,
          img: data.img,
          size: data.size,
          url: data.url,
        })
      }
    })
    localStorage.setItem('cart', JSON.stringify(carts))
  }
  return (
    <div>
      <Header />
      <ShowPath />
      <div className="cart-main">
        <div className="cart-wrapper">
          <div className="cart">
            <div className="cart-header">
              <h1>Cart ({JSON.parse(localStorage.getItem("cart")).length})</h1>
            </div>
            <div className="cart-table-header">
              <p>Product</p>
              <p>Price</p>
            </div>
            {JSON.parse(localStorage.getItem("cart")).length == 0 ? (
              <div>
                <div className="cart-empty">Cart is Empty</div>
                <div className="cart-empty-button">
                  <Button url="/" string={"/ Start Shopping Now"} />
                </div>
              </div>
            ) : null}
            {JSON.parse(localStorage.getItem("cart")).map((cart, index) => {
              return (
                <div className="products-wrapper">
                  <a href={cart.url} className="cart-img">
                    <img src={cart.img} />
                  </a>
                  <div className="cart-name">
                    <p>{cart.name}</p>
                    {cart.size == null ? null : (
                      <p style={{ fontWeight: "700" }}>
                        Size: {cart.size.toUpperCase()}
                      </p>
                    )}
                    <FormControl fullWidth>
                      <InputLabel
                        variant="standard"
                        htmlFor="uncontrolled-native"
                      >
                        Qty
                      </InputLabel>
                      <NativeSelect
                        defaultValue={cart.amount}
                        sx={{ width: "15%" }}
                        onChange={event => handleChange(event, index)}
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
                  <Price amount={cart.amount} price={cart.price}/>
                    <p
                      id="remove"
                      style={{
                        textDecoration: "underline",
                        cursor: "pointer",
                        color: "rgba(0, 0, 0, 0.5)",
                        transition: "0.2s linear",
                      }}
                      onClick={() => removeFromCart(cart)}
                    >
                      Remove
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="checkout">
          <div className="checkout-content">
            <p>Subtotal ({JSON.parse(localStorage.getItem("cart")).length} {JSON.parse(localStorage.getItem("cart")).length > 1 ? "items" : "item"})</p>
            <TotalPrice style={{fontSize:"1.25vw"}} />
            {JSON.parse(localStorage.getItem("cart")).length == 0 ? null : <Button string="Checkout" url="/checkout" />}
            <p style={{fontSize:"0.85vw"}}>Taxes and shipping are<br />calculated at checkout.</p>
            <p style={{fontSize:"0.85vw"}}>*Item availability isn’t guaranteed<br />until checkout is complete.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export const TotalPrice = (props) => {
  let shipping = props.shipping
  if (shipping == undefined) {shipping = 0}
  let totalPrice = 0;
  {
    JSON.parse(localStorage.getItem("cart")).map((cart, index) => {
      totalPrice += cart.price*cart.amount;
    });
  }
  return <p style={props.style}>${(totalPrice+shipping).toFixed(2)}</p>;
};

export default Cart;
