import React from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HeaderPhoto from "../components/HeaderPhoto";
import Product from "../components/Product";
import ShowPath from "../components/ShowPath";
import "../components/ProductWrapper.css";
import {tops, bottoms, sales, badges, pins, standees, plush, mugs, figures, keychains, mousepads} from "../data/ProductList";

function Search() {
  const { keyword } = useParams();
  console.log(keyword);
  var Products = tops.concat(bottoms, sales, badges, pins, standees, plush, mugs, figures, keychains, mousepads);

  
  const filteredProduct = Products.filter((product) => {
    return product.name.toLowerCase().includes(keyword.toLowerCase());
  });

  const productElementsSearch = filteredProduct.map((list, index) => {
    return <Product key={index} list={list} />;
  });

  return (
        <div>
          <Header />
          <ShowPath />
          <HeaderPhoto text={'Search '+ '"' + keyword + '"'} img="search"/>
          <div className="frame-wrapper">
          {productElementsSearch}
          </div>
          <Footer />
        </div>
      );
};

export default Search;
