import React from "react";
import Header from "../components/Header";
import MyGallery from "../components/Slideshow";
import Product from "../components/Product";
import ProductWrapper from "../components/ProductWrapper";

const Home = () => {
  return (
    <div>
      <Header />
      <MyGallery />
      <ProductWrapper />
    </div>
  );
};

export default Home;
