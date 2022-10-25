import React from "react";
import { useLocation } from "react-router-dom";
import "./ShowPath.css";

//แสดง Path ของสินค้าว่าอยู่ในหมวดหมู่ใดเมื่ออยู่ในหน้ารายละเอียดของสินค้า
const ShowPath = () => {
  let paths = useLocation().pathname.split("/").slice(1);
  return (
    <div className="path-wrapper">
      <a href="/" className="path">Home</a>
      {paths.map((path, index) => (
        <div className="d-flex">
          <p className="cursor-context-menu">/</p>
          <a href={"/" + paths.slice(0, index + 1).slice(0).join("/")} className="path color-a" >
            {path.split("_").map((path) => (
              <p className="path-section">{path[0].toUpperCase()}{path.slice(1)}</p>
            ))}
          </a>
        </div>
      ))}
    </div>
  );
};

export default ShowPath;
