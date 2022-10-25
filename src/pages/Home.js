import React from "react";
import Header from "../components/Header";
import MyGallery from "../components/Slideshow";
import ProductWrapper from "../components/ProductWrapper";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <MyGallery
        images={[
          {
            original: "/images/Slideshow/1.jpg",
          },
          {
            original: "/images/Slideshow/2.jpg",
          },
          {
            original: "/images/Slideshow/3.jpg",
          },
        ]}
      />
      <ProductWrapper />
      <Footer />
    </div>
  );
};

export default Home;
