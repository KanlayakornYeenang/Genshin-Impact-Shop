import React from "react";
import "./HeaderPhoto.css";

// รูปภาพพร้อม Text ที่แสดงในแต่ละ Catagories ที่เข้าไป

const HeaderPhoto = (props) => {
    return (
        <div className={"header-photo " + props.head.slice(1, -1)}>
            <h1>{props.text}</h1>
        </div>
    );
}

export default HeaderPhoto;