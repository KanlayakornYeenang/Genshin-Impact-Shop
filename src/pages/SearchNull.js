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
      <HeaderPhoto text={"0 Results for"} texts='""' img="search" />
      <div
        style={{ display: "flex", justifyContent: "center" }}
        className="frame-wrapper"
      >
        <p
          style={{
            fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
            fontSize: "1vw",
          }}
        >
          No matches found
        </p>
      </div>
      <Footer />
    </div>
    // <div>
    //   <Header />
    //   <ShowPath />
    //   <h1 className="header-search">0 Results for ""</h1>
    //   <div style={{display:"flex", justifyContent:"center"}} className="frame-wrapper">
    //     <p style={{fontFamily:'"Roboto", "Helvetica", "Arial", sans-serif', fontSize:"1vw"}}>No matches found</p>
    //   </div>
    //   <Footer />
    // </div>
  );
}

export default SearchNull;
