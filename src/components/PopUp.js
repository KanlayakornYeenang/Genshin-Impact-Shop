import React from "react";
import Popup from "reactjs-popup";
import { Tabs } from "./Navbar";
import "./PopUp.css";
import { IoMdClose } from "react-icons/io";
import { HiArrowRight } from "react-icons/hi";
import MyTextFieldString, { MyTextFieldPassword } from "./MyTextField";
import Account from "./Account";
import {useState} from "react";
import { TextField } from "@mui/material";
import styled from "@emotion/styled";

const CSSTextField = styled(TextField)({
  width: "100%",
  "& #filled-basic": {
    fontFamily: "HYWenHei",
    padding: "2vw 4.5vw 0.5vw 2vw",
    fontSize: "120%",
  },
  "& .css-e4w4as-MuiFormLabel-root-MuiInputLabel-root": {
    fontFamily: "HYWenHei",
    padding: "0vw 2.5vw 0vw 1vw",
    fontSize: "120%",
  },
  "& .css-o943dk-MuiFormLabel-root-MuiInputLabel-root": {
    fontFamily: "HYWenHei",
    padding: "0vw 2.5vw 0vw 1vw",
    fontSize: "120%",
  },
  "& .css-19mk8g1-MuiInputBase-root-MuiFilledInput-root": {
    fontFamily: "HYWenHei",
    padding: "0vw 2.5vw 0vw 1vw",
    fontSize: "120%",
  },
  "& .css-o943dk-MuiFormLabel-root-MuiInputLabel-root.Mui-focused": {
    color: "rgb(96 96 96)",
  },
  "& .css-19mk8g1-MuiInputBase-root-MuiFilledInput-root": {
    borderRadius: "2.2vw",
    border: "0.2vw solid rgba(17, 17, 17, 0)",
    transition: "0.2s linear",
  },
  "& .css-19mk8g1-MuiInputBase-root-MuiFilledInput-root.Mui-focused": {
    border: "0.2vw solid #111",
  },
  "& .css-e4w4as-MuiFormLabel-root-MuiInputLabel-root": {
    paddingTop: "0.5vh",
  },
  "& #filled-basic-label": {
    fontFamily: "HYWenHei",
    padding: "0.3vw 2.5vw 0vw 2vw",
    fontSize: "120%",
  },
  "& .css-19mk8g1-MuiInputBase-root-MuiFilledInput-root:before": {
    border: 0,
  },
  "& .css-19mk8g1-MuiInputBase-root-MuiFilledInput-root:hover:not(.Mui-disable):before":
    {
      border: 0,
    },
  "& .css-19mk8g1-MuiInputBase-root-MuiFilledInput-root:after": {
    border: 0,
  },
});

const PopUp = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const ref = React.useRef();
  const closeTooltip = () => {
    ref.current.close();
    setPopup("SignIn");
  };
  const [popup, setPopup] = React.useState("SignIn");
  const handleClick = (popupState, submit) => {
    setPopup(popupState);
    if(submit != "Nothing"){
      <Account type={popupState} enter={submit}/>
    }
    console.log(submit);
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
        <div className="popup-footer" onClick={() => handleClick("Email", "Nothing")}>
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
            {/* <MyTextFieldString label="EMAIL" id="email"/> */}
            <CSSTextField
              className="emailInput"
              id="filled-basic"
              label="EMAIL"
              variant="filled"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
        <div className="arrow" onClick={() => handleClick("Username", email)}>
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
            <MyTextFieldString label="USERNAME" onChange={(e) => setUsername(e.target.value)}/>
          </div>
        </div>
        <div className="arrow" onClick={() => handleClick("Password", username)}>
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
            <MyTextFieldString label="CONFIRM PASSWORD" onChange={(e) => setPassword(e.target.value)}/>
          </div>
        </div>
        <div className="arrow" onClick={() => handleClick("Done", password)}>
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
              case "Done":
                return <SignIn />;
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
