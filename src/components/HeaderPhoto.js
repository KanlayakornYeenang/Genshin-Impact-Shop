import React from "react";
import "./HeaderPhoto.css";

// รูปภาพพร้อม Text ที่แสดงในแต่ละ Catagories ที่เข้าไป

const HeaderPhoto = (props) => {
  return (
    <div className={"header-photo"}>
      <h1>{props.text}</h1>
      <img style={{width:"55%", position:"absolute", left:"45%", top:"0%", animation:"showup 1s"}} src={"/images/" + props.img + ".png"} />
      <div className="shape shapeframe"></div>
    </div>
  );
};

export default HeaderPhoto;
