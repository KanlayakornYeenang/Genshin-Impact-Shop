import React from "react";
import { useState} from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HeaderPhoto from "../components/HeaderPhoto";
import Product from "../components/Product";
import ShowPath from "../components/ShowPath";
import "../components/ProductWrapper.css";
import SearchProduct from "../components/SearchProduct";
import {tops, bottoms, sales, badges, pins, standees, plush, mugs, figures, keychains, mousepads} from "../data/ProductList";



function Search() {
  var Products = tops.concat(bottoms, sales, badges, pins, standees, plush, mugs, figures, keychains, mousepads);


  const [searchProduct, setSearchProduct] = useState('');
  
  const filteredProduct = Products.filter((product) => {
    return product.name.includes(searchProduct);
  });

  const productElementsSearch = filteredProduct.map((list, index) => {
    return <Product key={index} list={list} />;
  });

  

  return (
        <div>
          <Header />
          <ShowPath/>
          <HeaderPhoto text={"Search"} head={"/search/"}/>
          <SearchProduct value={searchProduct} onValueChange={setSearchProduct}/>
          <div className="frame-wrapper">
            {productElementsSearch}
          </div>
          <Footer />
        </div>
      );
};

export default Search;