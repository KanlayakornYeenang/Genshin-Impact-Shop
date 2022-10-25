import React from "react";
import Header from "../components/Header";
import ShowPath from "../components/ShowPath";
import { MyGalleryProducts } from "../components/Slideshow";
import Footer from "../components/Footer";

// const Details = (props) => {
//   return (
//     <div>
//       <img src={props.products.images[0]} />
//     </div>
//   );
// };

const ProductDetails = (props) => {
  let images = [];
  props.products.images.map((img) =>
    images.push({ original: img, thumbnail: img })
  );
  return (
    <div>
      <Header />
      <ShowPath />
      {/* <Details products={props.products} /> */}
      <div className="product-details">
        <MyGalleryProducts images={images} />
      </div>
      <Footer/>
    </div>
  );
};

export default ProductDetails;
