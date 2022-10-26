import React from "react";
import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";

//Import Pages
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import Sale from "./pages/Sale";
import AllProductsParent from "./pages/AllProductsParent";

//Import Data JSON
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
  standees,
  tops,
} from "./data/ProductList";
import { collectibles } from "./data/menuItems";

const App = () => {
  const menu = ["Home","Apparel","Collectibles","Accessories","Sale","Signin",];

  const allproductsString = ["Badges","Figures","Keychains","Pins","Plush","Standees","Tops","Bottoms","Mugs","Mousepads",];
  const allproductsPath = ["/collectibles/","/collectibles/","/collectibles/","/collectibles/","/collectibles/","/collectibles/","/apparel/","/apparel/","/accessories/","/accessories/",];
  const allproducts = [badges,figures,keychains,pins,plush,standees,tops,bottoms,mugs,mousepads,];

  const allproductsParentString = ["Collectibles", "Apparel", "Accessories"];
  const allproductsParentPath = ["/collectibles", "/apparel", "/accessories"];
  const allproductsParent = [[badges, figures, keychains, pins, plush, standees],[tops, bottoms],[mugs, mousepads],];

  return (
    // การ Routes คือการเชื่อมต่อ Path ด้านหลัง Domain เข้ากับหน้า Page HTML นั้นๆ เช่น เชื่อม /home กับ Page Home.js
    <BrowserRouter>
      <Routes>
        {menu.map((list, index) => (
          <Route path={"/" + list.index} element={<Home />} />
        ))}
        <Route path="/" element={<Home />} />
        {allproducts.map((allproduct, index) => (
            <Route
                path={"" + allproductsPath[index] + allproductsString[index]}
                element={<AllProducts product={allproduct} text={allproductsString[index]} head={allproductsPath[index]}/>}
            />
        ))}
        {allproductsParent.map((allproductParent, index) => (
            <Route
                path={"" + allproductsParentPath[index]}
                element={<AllProductsParent product={allproductParent} text={allproductsParentString[index]} head={allproductsParentPath[index] + "/"}/>}
            />
        ))}
        {/* {tops.map((top) => (
            <Route path={top.url} element={<ProductDetails products={top} />} />
            console.log({top})
          ))} */}
        {/* ทำไมถึงมีสอง Map ซึ่งทำความเข้าใจก่อนว่าข้อมูลตอน Import มาจะมีหลายส่วน เราจะเก็บทุกๆส่วนเป็น Array เดียวคือตัวแปรใน Map แรก แล้วดึงแต่ส่วนย่อยออกมา
        เป็นตัวแปรใน Map ด้านใน แล้วในข้อมูลแต่ละส่วนก็จะมีข้อมูลของสินค้าแต่ละชิ้นอยู่ เราเลยเรียกข้อมูลสินค้าแต่ละชิ้น ไป Link เป็นหน้า Page นึงไปเลยใน <Route> */}
        {allproducts.map((allproducts, index) =>
          allproducts.map((allproduct) => (
            <Route
              path={allproduct.url}
              element={<ProductDetails products={allproduct} />}
            />
          ))
        )}
        {/* // ส่วนนี้เป็นการเชื่อม Path กับ Page Sale ที่เราสร้างไว้มั้ง */}
        <Route path="/sale" element={<Sale />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
