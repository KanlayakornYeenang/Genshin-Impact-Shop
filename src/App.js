import React from "react";
import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";

//Import Pages
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import Collectibles from "./pages/Collectibles";

//Import Data JSON
import CollectiblesProduct from "./pages/CollectiblesProduct";
import {badges, bottoms, figures, keychains, mousepads, mugs, pins, plush, standees, tops} from "./data/ProductList";
import {collectibles} from "./data/menuItems";

const App = () => {
    const menu = ["Home", "Apparel", "Collectibles", "Accessories", "Sale", "Signin"];

    const apparelsproductString = ["Tops", "Bottoms"];
    const apparelsproduct = [tops, bottoms];

    const collectiblesproductString = ["Badges", "Figures", "Keychains", "Pins", "Plush", "Standees"];
    const collectiblesproduct = [badges, figures, keychains, pins, plush, standees];

    const accessoriesproductString = ["Mugs", "Mousepads"];
    const accessoriesproduct = [mugs, mousepads];
    
    return (

    // การ Routes คือการเชื่อมต่อ Path ด้านหลัง Domain เข้ากับหน้า Page HTML นั้นๆ เช่น เชื่อม /home กับ Page Home.js
      <BrowserRouter>
        <Routes>
          {menu.map((list, index) => (
            <Route path={"/" + list.index} element={<Home />} />
          ))}

          <Route path="/" element={<Home />} />

          {collectiblesproduct.map((collectible, index) => (
            <Route
              path={"/collectibles/" + collectiblesproductString[index]}
              element={
                <CollectiblesProduct
                  product={collectible}
                  text={collectiblesproductString[index]}
                />
              }
            />
          ))}
          
          <Route path={"/collectibles"} element={<Collectibles />} />

          {/* {tops.map((top) => (
            <Route path={top.url} element={<ProductDetails products={top} />} />
            console.log({top})
          ))} */}
        


        {/* ทำไมถึงมีสอง Map ซึ่งทำความเข้าใจก่อนว่าข้อมูลตอน Import มาจะมีหลายส่วน เราจะเก็บทุกๆส่วนเป็น Array เดียวคือตัวแปรใน Map แรก แล้วดึงแต่ส่วนย่อยออกมา
        เป็นตัวแปรใน Map ด้านใน แล้วในข้อมูลแต่ละส่วนก็จะมีข้อมูลของสินค้าแต่ละชิ้นอยู่ เราเลยเรียกข้อมูลสินค้าแต่ละชิ้น ไป Link เป็นหน้า Page นึงไปเลยใน <Route> */}
          {apparelsproduct.map((apparels, index) => 
            apparels.map((apparel) => (
              <Route
                path={apparel.url}
                element={<ProductDetails products={apparel} />}
              />
            ))
          )}

          {collectiblesproduct.map((collectibles, index) =>
            collectibles.map((collectible) => (
              <Route
                path={collectible.url}
                element={<ProductDetails products={collectible} />}
              />
            ))
          )}

          {accessoriesproduct.map((accessories, index) =>
            accessories.map((accessorie) => (
              <Route
                path={accessorie.url}
                element={<ProductDetails products={accessorie} />}
              />
            ))
          )}
        </Routes>
      </BrowserRouter>
    );
};

export default App;