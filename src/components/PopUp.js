import React from "react";
import Popup from "reactjs-popup";
import { Tabs } from "./Navbar";
import "./PopUp.css";
import { IoMdClose } from "react-icons/io";
import { HiArrowRight } from "react-icons/hi";
import MyTextFieldString, { MyTextFieldPassword } from "./MyTextField";

const PopUp = () => {
  const ref = React.useRef();
  const closeTooltip = () => {
    ref.current.close();
    setPopup("SignIn");
  };
  const [popup, setPopup] = React.useState("SignIn");
  const handleClick = (popupState) => {
    setPopup(popupState);
  };

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
        <div className="arrow">
          <HiArrowRight />
        </div>
        <div className="popup-footer" onClick={() => handleClick("Email")}>
          CREATE ACCOUNT
        </div>
      </div>
    );
  };

  const Email = () => {
    return (
      <div className="frame-circle-in">
        <h1>What's your Email?</h1>
        <div className="singin-input-container">
          <div className="signin-input-wrapper">
            <MyTextFieldString label="EMAIL" />
          </div>
        </div>
        <div className="arrow" onClick={() => handleClick("Username")}>
          <HiArrowRight />
        </div>
        <div className="popup-footer" onClick={() => handleClick("SignIn")}>
          ALREADY HAVE AN ACCOUNT?
        </div>
      </div>
    );
  };

  const Username = () => {
    return (
      <div className="frame-circle-in">
        <h1>Choose a Username</h1>
        <p style={{ color: "#7a7a7a", fontSize: "1.5vw" }}>
          Used for sign in to all our games.
        </p>
        <div className="singin-input-container">
          <div className="signin-input-wrapper">
            <MyTextFieldString label="USERNAME" />
          </div>
        </div>
        <div className="arrow" onClick={() => handleClick("Password")}>
          <HiArrowRight />
        </div>
      </div>
    );
  };

  const Password = () => {
    return (
      <div className="frame-circle-in">
        <div style={{ textAlign: "center" }}>
          <h1>Choose</h1>
          <h1>a Password</h1>
        </div>
        <p style={{ color: "#7a7a7a", fontSize: "1.5vw" }}>
          Make sure it's a good one.
        </p>
        <div className="singin-input-container">
          <div className="signin-input-wrapper">
            <MyTextFieldString label="PASSWORD" />
          </div>
          <div className="signin-input-wrapper">
            <MyTextFieldString label="CONFIRM PASSWORD" />
          </div>
        </div>
        <div className="arrow">
          <HiArrowRight />
        </div>
      </div>
    );
  };

  return (
    <div className="signin">
      <Popup
        ref={ref}
        trigger={
          <div>
            <Tabs title={"SIGN IN"} />
          </div>
        }
        modal
        nested
      >
        <div className="frame-circle">
          <button className="close" onClick={closeTooltip}>
            <p>
              <IoMdClose />
            </p>
          </button>
          {(() => {
            switch (popup) {
              case "SignIn":
                return <SignIn />;
              case "Email":
                return <Email />;
              case "Username":
                return <Username />;
              case "Password":
                return <Password />;
              default:
                return null;
            }
          })()}
        </div>
        <div className="fade" onClick={closeTooltip}></div>
      </Popup>
    </div>
  );
};

export default PopUp;
