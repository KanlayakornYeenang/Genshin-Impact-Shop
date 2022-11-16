import React from "react";
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";
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

const MyTextFieldString = (props) => {
  return (
    <CSSTextField
      className="signin-input"
      id="filled-basic"
      label={props.label}
      variant="filled"
    />
  );
};

export const MyTextFieldPassword = () => {
  const [passwordShown, setPasswordShown] = React.useState(false);
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };
  return (
    <div className="signin-input-wrapper">
      <CSSTextField
        className="signin-input"
        id="filled-basic"
        label="PASSWORD"
        variant="filled"
        type={passwordShown ? "text" : "password"}
      />
      <button className="eye" onClick={togglePassword}>
        {passwordShown ? <BsFillEyeFill /> : <BsFillEyeSlashFill />}
      </button>
    </div>
  );
};

export default MyTextFieldString