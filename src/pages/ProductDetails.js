import React from "react";
import Header from "../components/Header";
import ShowPath from "../components/ShowPath";
import { MyGalleryProducts } from "../components/Slideshow";
import Footer from "../components/Footer";
import "../components/ProductDetails.css";

const Details = (props) => {
  return (
    <div className="details">
      <div className="shape shapetop"></div>
      <div className="details-wrapper">
        <div className="details-header">
          <div className="details-name">{props.products.name}</div>
          <div className="details-price">${props.products.price}</div>
        </div>
        <button className="addtocart">
          <div className="addtocart-txt">
            ${props.products.price} - Add to Cart
          </div>
          <div className="addtocart-bg"></div>
        </button>
        <div className="line"></div>
        <div className="details-description">
          <div>DESCRIPTION</div>
          <div style={{ whiteSpace: "pre-line" }}>
            {props.products.description}
          </div>
        </div>
      </div>
      <div className="shape shapebottom"></div>
    </div>
  );
};

const ProductDetails = (props) => {
  let images = [];
  props.products.images.map((img) =>
    images.push({ original: img, thumbnail: img })
  );
  return (
    <div>
      <Header />
      <ShowPath />
      <div className="product-frame">
        <div className="product-details">
          <MyGalleryProducts images={images} />
          <Details products={props.products} />
        </div>
        <img style={{width:"100vw", height:"2.75vw"}} src="/images/ShapeLine.png"/>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default ProductDetails;
