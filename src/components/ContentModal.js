import React, { useState, useEffect } from "react";
import { FormControl, InputLabel, OutlinedInput } from "@mui/material";
import styled from "@emotion/styled";
import { HiArrowRight } from "react-icons/hi";
import { AiFillEye, AiFillEyeInvisible, AiFillWarning } from "react-icons/ai";
import "./ContentModal.css";

const StyledOutlineInput = styled(OutlinedInput)({
  "& .MuiOutlinedInput-input": {
    width: "85%",
  },
});

const redbutton = { background: "#d13639", cursor: "pointer" }

export const Done = ({handleClick}) => {
  return (
    <div className="modal-content">
      <h1 style={{ textAlign: "center" }}>
        Successful!
      </h1>
      <h2 style={{ fontWeight: "100", color: "#7a7a7a", fontSize: "1.25vw" , textAlign:"center"}}>
        Your account has been successfully registered.
      </h2>
      <div
      className="arrowicon"
      style={redbutton}
      onClick={() => handleClick("Refresh")}
      >
      <p>
        <HiArrowRight />
      </p>
      </div>
    </div>
  );
}

export const Password = ({ handleClick, setPassword, password }) => {
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };
  return (
    <div className="modal-content">
      <h1 style={{ textAlign: "center" }}>
        Choose
        <br />a Password
      </h1>
      <h2 style={{ fontWeight: "100", color: "#7a7a7a", fontSize: "1.25vw" }}>
        Make sure it's a good one.
      </h2>
      <FormControl className="password-wrapper">
        <InputLabel variant="filled" className="inputlabel">
          PASSWORD
        </InputLabel>
        <StyledOutlineInput
          type={passwordShown ? "text" : "password"}
          className="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <button onClick={togglePassword}>
          {passwordShown ? <AiFillEye /> : <AiFillEyeInvisible />}
        </button>
      </FormControl>
      <FormControl className="password-wrapper">
        <InputLabel variant="filled" className="inputlabel">
          CONFIRM PASSWORD
        </InputLabel>
        <StyledOutlineInput
          type={passwordShown ? "text" : "password"}
          className="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={togglePassword}>
          {passwordShown ? <AiFillEye /> : <AiFillEyeInvisible />}
        </button>
      </FormControl>
      <div
        className="arrowicon"
        style={
          (password != "" && confirmPassword != "" && password == confirmPassword && password.length >= 6)
            ? redbutton
            : null
        }
        onClick={(password != "" && confirmPassword != "" && password == confirmPassword && password.length >= 6) ? () => handleClick("Done", password) : null}
      >
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
      <div
        className="arrowicon"
        style={
          username.length >= 4 ? redbutton : null
        }
        onClick={username.length >= 4 ? () => handleClick("Password", username) : null}
      >
        <p>
          <HiArrowRight />
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
      <div
        className="arrowicon"
        style={
          (email != "" && email.includes("@") && email.includes(".")) ? redbutton : null
        }
        onClick={(email != "" && email.includes("@") && email.includes(".")) ? () => handleClick("Username", email) : null}
      >
        <p>
          <HiArrowRight />
        </p>
      </div>
      <p id="already-account" className="modal-footer" onClick={() => handleClick("SignIn")}>
        ALREADY HAVE AN ACCOUNT?
      </p>
    </div>
  );
};

const SignIn = ({ handleClick, account }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordShown, setPasswordShown] = useState(false);
  const [isWarning, setWarning] = useState(false);

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  const checkAccount = () => {
    account.map((data, index) => {
      if (
        username == data.username &&
        password == data.password &&
        localStorage.getItem("User") == null
      ) {
        // เช็คว่า Sign in valid มั้ย
        // ถ้า Valid -> Store user's detail ลง local storage
        localStorage.setItem("User", JSON.stringify(data.username));
        handleClick("Successfully");
        setWarning(false);
        window.location.reload(false);
      } else if (username == "" || password == "") {
        console.log("");
      } else {
        setUsername("");
        setPassword("");
        setWarning(true);
      }
    });
  };

  return (
    <div className="modal-content">
      <h1>Sign In</h1>
      {isWarning ? (
        <p
          style={{
            fontSize: "1vw",
            textAlign: "center",
            color: "#be29cc",
            animation: "showup 0.5s",
          }}
        >
          <AiFillWarning />
          &nbsp;Your username or password
          <br />
          may be incorrect, or you might need to
          <br />
          sign up to a website if you haven't an account.
        </p>
      ) : null}
      <FormControl>
        <InputLabel variant="filled" className="inputlabel">
          USERNAME
        </InputLabel>
        <OutlinedInput
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </FormControl>
      <FormControl className="password-wrapper">
        <InputLabel variant="filled" className="inputlabel">
          PASSWORD
        </InputLabel>
        <StyledOutlineInput
          type={passwordShown ? "text" : "password"}
          className="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={togglePassword}>
          {passwordShown ? <AiFillEye /> : <AiFillEyeInvisible />}
        </button>
      </FormControl>
      <div
        className="arrowicon"
        style={
          username != "" && password != ""
            ? redbutton
            : null
        }
        onClick={checkAccount}
      >
        <p>
          <HiArrowRight />
        </p>
      </div>
      <p
        id="create-account"
        className="modal-footer"
        onClick={() => handleClick("Email", "Nothing")}
      >
        CREATE ACCOUNT
      </p>
    </div>
  );
};

export default SignIn;
