import React from "react";
import { useState} from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HeaderPhotoSearch from "../components/HeaderPhotoSearch";
import Product from "../components/Product";
import ShowPath from "../components/ShowPath";
import "../components/ProductWrapper.css";
import SearchProduct from "../components/SearchProduct";
import {tops, bottoms, sales, badges, pins, standees, plush, mugs, figures, keychains, mousepads} from "../data/ProductList";

function Search(props) {
  const {searchKeyword} = props;
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
          <ShowPath />
          <HeaderPhotoSearch text={'Search '+ '"' + searchKeyword + '"'} head={"/search/"}/>
          <SearchProduct value={searchProduct} onValueChange={setSearchProduct}/>
          <div className="frame-wrapper">
            {productElementsSearch}
          </div>
          <Footer />
        </div>
      );
};

export default Search;
