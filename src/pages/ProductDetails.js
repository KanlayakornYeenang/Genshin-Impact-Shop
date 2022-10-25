import React from "react";
import Header from "../components/Header";
import ShowPath from "../components/ShowPath";

const Details = (props) => {
  console.log(props.products)
  return (
    <div>
      <img src={props.products.images[0]}/>
    </div>
  );
};

const ProductDetails = (props) => {
  return (
    <div>
      <Header />
      <ShowPath />
      <Details products={props.products} />
    </div>
  );
};

export default ProductDetails;
