import React from "react";
import Header from "../components/Header";
import ShowPath from "../components/ShowPath";
import { MyGalleryProducts } from "../components/Slideshow";
import Footer from "../components/Footer";
import "../components/ProductDetails.css";

const Details = (props) => {
  return (
    <svg height="210" width="500">
    </svg>
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
      <div className="product-details">
        <MyGalleryProducts images={images} />
        <Details products={props.products} />
      </div>
      <div className="footer-wrapper">
        <Footer />
      </div>
    </div>
  );
};

export default ProductDetails;
