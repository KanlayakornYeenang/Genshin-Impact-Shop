import React from "react";
import "./Product.css";

const Product = (props) => {
  return (
      <div className="frame">
        <div className="imgProduct">
          <img src={props.list.images[0]} />
        </div>
        <p className="product_name">{props.list.name}</p>
        <p className="product_price">${props.list.price}</p>
      </div>
  );
};

export default Product;
