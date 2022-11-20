import React from "react";
import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";

//Import Pages
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import Sale from "./pages/Sale";
import AllProductsParent from "./pages/AllProductsParent";
import Cart from "./pages/Cart";
import Search from "./pages/Search";//Import Data JSON
import SearchNull from "./pages/SearchNull";
import NotFound from "./pages/NotFound";
import AllProducts from "./pages/AllProducts";
import {
  badges,
  bottoms,
  figures,
  keychains,
  mousepads,
  mugs,
  pins,
  plush,
  sales,
  standees,
  tops,
} from "./data/ProductList";
import Checkout from "./pages/Checkout";

const App = () => {
  const menu = [
    "Home",
    "Apparel",
    "Collectibles",
    "Accessories",
    "Sale",
    "Signin",
  ];

  const allproductsPath = [
    "apparel",
    "apparel",
    "collectibles",
    "collectibles",
    "collectibles",
    "collectibles",
    "collectibles",
    "collectibles",
    "accessories",
    "accessories",
  ];
  const allproductsString = [
    "Tops",
    "Bottoms",
    "Badges",
    "Figures",
    "Keychains",
    "Pins",
    "Plush",
    "Standees",
    "Mugs",
    "Mousepads",
  ];
  const allproducts = [
    tops,
    bottoms,
    badges,
    figures,
    keychains,
    pins,
    plush,
    standees,
    mugs,
    mousepads,
    sales
  ];

  const allproductsParentString = ["Apparel", "Collectibles", "Accessories"];
  const allproductsParentPath = ["apparel", "collectibles", "accessories", ];
  const allproductsParent = [
    [tops, bottoms],
    [badges, figures, keychains, pins, plush, standees],
    [mugs, mousepads],
  ];

  if (JSON.parse(localStorage.getItem("account")) == null) {
    localStorage.setItem("account", "[]");
  }
  if (JSON.parse(localStorage.getItem("cart")) == null) {
    localStorage.setItem("cart", "[]");
  }

  return (
    // การ Routes คือการเชื่อมต่อ Path ด้านหลัง Domain เข้ากับหน้า Page HTML นั้นๆ เช่น เชื่อม /home กับ Page Home.js
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {allproducts.map((allproduct, index) => (
          <Route
            key={index}
            path={"/" + allproductsPath[index] + "/" + allproductsString[index]}
            element={
              <AllProducts
                product={allproduct}
                text={allproductsString[index]}
                img={allproductsPath[index]}
              />
            }
          />
        ))}
        {allproductsParent.map((allproductParent, index) => (
          <Route
            key={index}
            path={"/" + allproductsParentPath[index]}
            element={
              <AllProductsParent
                product={allproductParent}
                text={allproductsParentString[index]}
                img={allproductsParentPath[index]}
              />
            }
          />
        ))}
        {/* ทำไมถึงมีสอง Map ซึ่งทำความเข้าใจก่อนว่าข้อมูลตอน Import มาจะมีหลายส่วน เราจะเก็บทุกๆส่วนเป็น Array เดียวคือตัวแปรใน Map แรก แล้วดึงแต่ส่วนย่อยออกมา
        เป็นตัวแปรใน Map ด้านใน แล้วในข้อมูลแต่ละส่วนก็จะมีข้อมูลของสินค้าแต่ละชิ้นอยู่ เราเลยเรียกข้อมูลสินค้าแต่ละชิ้น ไป Link เป็นหน้า Page นึงไปเลยใน <Route> */}
        {allproducts.map((allproducts, index) =>
          allproducts.map((allproduct, index) => (
            <Route
              key={index}
              path={allproduct.url}
              element={<ProductDetails products={allproduct} />}
            />
          ))
        )}
        {/* // ส่วนนี้เป็นการเชื่อม Path กับ Page Sale ที่เราสร้างไว้มั้ง */}
        <Route path="/sale" element={<Sale />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/search" element={<SearchNull />} />
        <Route path="/search/:keyword" element={<Search />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="*" element={<NotFound />} />
        </Routes>
        </BrowserRouter>
  );
  };
export default App;
