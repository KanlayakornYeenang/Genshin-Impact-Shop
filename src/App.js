import React from "react";
import "./App.css";
import Home from "./pages/Home";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { tops } from "./data/ProductList";
import ProductDetails from "./pages/ProductDetails";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {tops.map((top) => <Route path={top.url} element={<ProductDetails products={top}/>} />)}
      </Routes>
    </BrowserRouter>
  );
};

export default App
