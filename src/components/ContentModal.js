import React, { useState } from "react";
import { FormControl, InputLabel, OutlinedInput } from "@mui/material";
import styled from "@emotion/styled";
import { HiArrowRight } from "react-icons/hi";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

const StyledOutlineInput = styled(OutlinedInput)({
  "& .MuiOutlinedInput-input": {
    width: "85%",
  },
});

export const Password = ({ handleClick, setPassword, password }) => {
  return (
    <div className="modal-content">
      <h1 style={{ textAlign: "center" }}>
        Choose
        <br />a Password
      </h1>
      <h2 style={{ fontWeight: "100", color: "#7a7a7a", fontSize: "1.25vw" }}>
        Make sure it's a good one.
      </h2>
      <PasswordField label="PASSWORD" />
      {/* <PasswordField label="CONFIRM PASSWORD" /> */}
      <FormControl>
        <InputLabel variant="filled" className="inputlabel">
          CONFIRM PASSWORD
        </InputLabel>
        <OutlinedInput
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </FormControl>
      <div className="arrowicon" onClick={() => handleClick("Done", password)}>
        <p>
          <HiArrowRight />
        </p>
      </div>
    </div>
  );
};

export const Username = ({ handleClick, setUsername, username }) => {
  return (
    <div className="modal-content">
      <h1>Choose a Username</h1>
      <h2 style={{ fontWeight: "100", color: "#7a7a7a", fontSize: "1.25vw" }}>
        Used for sign in to game.
      </h2>
      <FormControl>
        <InputLabel variant="filled" className="inputlabel">
          USERNAME
        </InputLabel>
        <OutlinedInput
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </FormControl>
      <div className="arrowicon">
        <p>
          <HiArrowRight onClick={() => handleClick("Password", username)} />
        </p>
      </div>
    </div>
  );
};

export const Email = ({ handleClick, setEmail, email }) => {
  return (
    <div className="modal-content">
      <h1>What's your Email?</h1>
      <FormControl>
        <InputLabel variant="filled" className="inputlabel">
          Email
        </InputLabel>
        <OutlinedInput
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormControl>
      <div className="arrowicon">
        <p>
          <HiArrowRight onClick={() => handleClick("Username", email)} />
        </p>
      </div>
      <p className="modal-footer" onClick={() => handleClick("SignIn")}>
        ALREADY HAVE AN ACCOUNT?
      </p>
    </div>
  );
};

const SignIn = ({ handleClick }) => {
  return (
    <div className="modal-content">
      <h1>Sign In</h1>
      <FormControl>
        <InputLabel variant="filled" className="inputlabel">
          USERNAME
        </InputLabel>
        <OutlinedInput />
      </FormControl>
      <PasswordField label="PASSWORD" />
      <div className="arrowicon">
        <p>
          <HiArrowRight />
        </p>
      </div>
      <p
        className="modal-footer"
        onClick={() => handleClick("Email", "Nothing")}
      >
        CREATE ACCOUNT
      </p>
    </div>
  );
};

const PasswordField = (props) => {
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };
  return (
    <FormControl className="password-wrapper">
      <InputLabel variant="filled" className="inputlabel">
        {props.label}
      </InputLabel>
      <StyledOutlineInput
        type={passwordShown ? "text" : "password"}
        className="password"
      />
      <button onClick={togglePassword}>
        {passwordShown ? <AiFillEye /> : <AiFillEyeInvisible />}
      </button>
    </FormControl>
  );
};

export default SignIn;
