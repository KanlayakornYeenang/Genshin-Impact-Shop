import React from "react";

const Button = (props) => {
  return (
    <button className="addtocart">
      <div className="addtocart-txt">{props.string}</div>
      <div className="addtocart-bg"></div>
    </button>
  );
};

export default Button;
