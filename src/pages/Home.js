import React from "react";
import Header from "../components/Header";
import MyGallery from "../components/Slideshow";
import ProductWrapper from "../components/ProductWrapper";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Header />
      <MyGallery />
      <ProductWrapper />
      <Footer/>
    </div>
  );
};

export default Home;
