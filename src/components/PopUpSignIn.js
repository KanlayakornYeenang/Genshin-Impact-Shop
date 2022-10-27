import React from "react";
import Popup from "reactjs-popup";
import { Tabs } from "./Navbar";
import "./PopUpSignIn.css";
import { HiArrowRight } from "react-icons/hi";
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";

export const ShowPassword = () => {
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };
  return (
    <div className="signin-input-wrapper">
      <input
        type={passwordShown ? "text" : "password"}
        className="signin-input password"
        placeholder="PASSWORD"
      />
      <button className="eye" onClick={togglePassword}>
        {passwordShown ? <BsFillEyeFill /> : <BsFillEyeSlashFill />}
      </button>
    </div>
  );
};

const PopUpSignIn = () => {
  return (
    <div className="signin">
      <Popup
        trigger={
          <div>
            <Tabs title={"SIGN IN"} />
          </div>
        }
        modal
        nested
      >
        <div className="frame-circle">
          <button className="close">
            <p><IoMdClose /></p>
          </button>
          <div className="frame-circle-in">
            <h1>Sign In</h1>
            <div className="singin-input-container">
              <div className="signin-input-wrapper">
                <input
                  type={"text"}
                  className="signin-input username"
                  placeholder="USERNAME"
                />
              </div>
              <ShowPassword />
            </div>
            <div className="login">
              <HiArrowRight />
            </div>
            <div className="createac">CREATE ACCOUNT</div>
          </div>
        </div>
        <div className="fade"></div>
      </Popup>
    </div>
  );
};

export default PopUpSignIn;
