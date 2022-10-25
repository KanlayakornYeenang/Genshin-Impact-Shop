import React from "react";
import "./App.css";
import Home from "./pages/Home";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { tops } from "./data/ProductList";
import ProductDetails from "./pages/ProductDetails";
import Badges from "./pages/Badges";
import Standees from "./pages/Standees";
import Pins from "./pages/Pins";
import Plush from "./pages/Plush";
import Figures from "./pages/Figures";
import Keychains from "./pages/Keychains";
import Tops from "./pages/Tops";
import Bottoms from "./pages/Bottoms";
import Apparel from "./pages/Apparel";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apparel" element={<Apparel />}/>
        <Route path="/apparel#" element={<Apparel />}/>
        <Route path="/apparel/tops" element={<Tops />}/>
        <Route path="/apparel/bottoms" element={<Bottoms />}/>
        <Route path="/collectibles/badges" element={<Badges />}/>
        <Route path="/collectibles/standees" element={<Standees />}/>
        <Route path="/collectibles/pins" element={<Pins />}/>
        <Route path="/collectibles/plush" element={<Plush />}/>
        <Route path="/collectibles/figures" element={<Figures />}/>
        <Route path="/collectibles/keychains" element={<Keychains />}/>
        {tops.map((top) => <Route path={top.url} element={<ProductDetails products={top}/>} />)}
      </Routes>
    </BrowserRouter>
  );
};

export default App
