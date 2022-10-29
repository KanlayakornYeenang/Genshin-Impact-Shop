import React from "react";
import { useState } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import "./Accordion.css";

const Accordion = () => {
  return (
    <div className="accordion">
      <div className="accordion-address">Add Address</div>
      <div className="accordion-icon">
        <AiOutlinePlus />
      </div>
      {/* <AiOutlineMinus /> */}
    </div>
  );
};

export default Accordion;
