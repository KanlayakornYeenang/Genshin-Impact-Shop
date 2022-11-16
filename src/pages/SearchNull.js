import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HeaderPhoto from "../components/HeaderPhoto";
import ShowPath from "../components/ShowPath";

function SearchNull() {
  return (
        <div>
          <Header />
          <ShowPath />
          <HeaderPhoto text={'Search'} img="search"/>
          <div style={{display:"flex", justifyContent:"center"}} className="frame-wrapper">
            <h1>Please search something.</h1>
          </div>
          <Footer />
        </div>
      );
};

export default SearchNull;
