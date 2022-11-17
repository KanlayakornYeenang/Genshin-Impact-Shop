import React from "react";
import { useLocation } from "react-router-dom";
import "./ShowPath.css";

//แสดง Path ของสินค้าว่าอยู่ในหมวดหมู่ใดเมื่ออยู่ในหน้ารายละเอียดของสินค้า
const ShowPath = () => {
  let paths = useLocation().pathname.split("/").slice(1);
  return (
    <div className="path-wrapper">
      <div className="path-content" style={{paddingLeft:"5vw"}}>
        <a href="/" className="path">
          Home
        </a>
      </div>
      {paths.map((path, index) => (
        <div className="path-content">
          <p className="path-sep">/</p>
          <a
            href={
              "/" +
              paths
                .slice(0, index + 1)
                .slice(0)
                .join("/")
            }
            className="path"
          >
            {path.split("_").map((path, index) => (
              <p key={index} className="path">
                {path[0].toUpperCase()}
                {path.slice(1)}
              </p>
            ))}
          </a>
        </div>
      ))}
    </div>
  );
};

export default ShowPath;
