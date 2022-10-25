import React from "react";
import "./HeaderPhoto.css";

const HeaderPhoto = (props) => {
    return (
        <div className="header-photo">
            <img src="/images/headerphoto.jpg"/>
            <h1>{props.text}</h1>
        </div>
    );
}

export default HeaderPhoto;