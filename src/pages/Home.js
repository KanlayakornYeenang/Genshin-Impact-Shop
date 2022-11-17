import React from "react";
import Header from "../components/Header";
import MyGallery, { MyGalleryAds } from "../components/Slideshow";
import ProductWrapper, {
  ProductWrapperSale,
} from "../components/ProductWrapper";
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
      <div className="ads-wrapper">
        <div className="ads">
          <MyGalleryAds
            images={[
              {
                original: "/images/Slideshow/ads1.png",
              },
              {
                original: "/images/Slideshow/ads2.png",
              },
              {
                original: "/images/Slideshow/ads3.png",
              },
            ]}
          />
        </div>
      </div>
      <ProductWrapperSale />
      <Footer />
    </div>
  );
};

export default Home;
