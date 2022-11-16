import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HeaderPhoto from "../components/HeaderPhoto";
import ProductSale from "../components/ProductSale";
import ShowPath from "../components/ShowPath";
import { sales } from "../data/ProductList";
import "../components/ProductWrapper.css";

function Sale() {
  const productElementsSales = sales.map((list, index) => {
    return <ProductSale key={index} list={list} />;
  });
  return (
        <div>
          <Header />
          <ShowPath />
          <HeaderPhoto text={"Sale"} img={"sale"}/>
          <div className="frame-wrapper">
            {productElementsSales}
          </div>
          <Footer />
        </div>
      );
}

export default Sale;
