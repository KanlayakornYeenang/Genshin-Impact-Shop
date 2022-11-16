import React from "react";
import { HiArrowRight } from "react-icons/hi";
import MyTextFieldString, { MyTextFieldPassword } from "./MyTextField";

const SignIn = () => {
  return (
    <div className="frame-circle-in">
      <h1>Sign In</h1>
      <div className="singin-input-container">
        <div className="signin-input-wrapper">
          <MyTextFieldString label="USERNAME" />
        </div>
        <MyTextFieldPassword />
      </div>
      <div className="login">
        <HiArrowRight />
      </div>
      <div className="createaccount">CREATE ACCOUNT</div>
    </div>
  );
};

export default SignIn