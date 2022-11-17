import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HeaderPhoto from "../components/HeaderPhoto";
import ShowPath from "../components/ShowPath";

function NotFound() {
  return (
    <div className="notfound">
      <img style={{width:"25%"}} src="./images/404.png" />
      <p id="error-title">This page cannot be found</p>
      <p id="error-content">
        Perhaps it flew away with Venti.
        <br />
        Perhaps it rose up to Celestia...
        <br />
        Perhaps it went somewhere far away...
      </p>
      <img style={{width:"2%"}} src="./images/star.png" />
      <a href="/" id="error-back">Back to HOME »</a>
      <img style={{width:"25%"}} src="./images/fox.png" />
    </div>
  );
}

export default NotFound;
