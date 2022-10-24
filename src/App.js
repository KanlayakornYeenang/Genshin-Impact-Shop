import React from "react";
import "./App.css";
import Home from "./pages/Home";
import { Route, Routes, BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App