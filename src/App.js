import React from "react";
import Header from "./components/Header";
import "./App.css";
import MyGallery from "./components/Slideshow";

const App = () => {
  // App.js => Header.js
  return <div>
    <Header />
    <MyGallery />
  </div>;
};

export default App;

// import './App.css';
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Home from "./frontend/Home";
// import SignIn from "./frontend/SignIn";

// const App = () => {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/Sale" element={<Sale />} />
//         <Route path="/SignIn" element={<SignIn />} />
//       </Routes>
//     </BrowserRouter>
//   );
// };

// export default App;
