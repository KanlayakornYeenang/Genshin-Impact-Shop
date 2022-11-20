import React from "react";

const Button = (props) => {
  return (
    <a href={props.url} className="addtocart" style={props.style1}>
        <div className="addtocart-txt">{props.string}</div>
        <div className="addtocart-bg" style={props.style2}>.</div>
    </a>
  );
};

export default Button;
