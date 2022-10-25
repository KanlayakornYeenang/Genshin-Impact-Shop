import React from "react";
import "./Product.css";

const Product = (props) => {
  return (
      <a href={props.list.url} className="frame">
        <div className="imgProduct">
          <img src={props.list.images[0]} />
        </div>
        <p className="product_name">{props.list.name}</p>
        <p className="product_price">${props.list.price}</p>
      </a>
  );
};

export default Product;
