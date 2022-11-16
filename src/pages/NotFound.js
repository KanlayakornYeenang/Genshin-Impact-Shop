import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HeaderPhoto from "../components/HeaderPhoto";
import ShowPath from "../components/ShowPath";

function NotFound() {
  return (
        <div>
          <Header />
          <ShowPath />
          <HeaderPhoto text={'404 Not Found'} img="NotFound"/>
          <div style={{display:"flex", alignItems:"center", flexFlow:"column"}} className="frame-wrapper">
            <h1>Page not found.</h1>
          </div>
          <Footer />
        </div>
      );
};

export default NotFound;
