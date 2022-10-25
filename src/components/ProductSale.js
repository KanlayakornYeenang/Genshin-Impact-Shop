import React from "react";
import "./Product.css";

//Elements ของกรอบตัวอย่างรายการสินค้า 1 กล่องที่มีรูป ชื่อ และราคา และราคาที่ลดแล้ว
const ProductSale = (props) => {
  return (
    <div className="frame">
      <div className="imgProduct">
        <img src={props.list.images[0]} />
      </div>
      <p className="product_name">{props.list.name}</p>
      <div className="inline">
        <p className="product_price sale">${props.list.price}</p>
        <p className="product_before">${props.list.before}</p>
      </div>
    </div>
  );
};

export default ProductSale;
