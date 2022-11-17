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

const SignIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  return (
    <div className="modal-content">
      <h1>Sign In</h1>
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
        <p onClick={togglePassword}>
          {passwordShown ? <AiFillEye /> : <AiFillEyeInvisible />}
        </p>
      </FormControl>
      <div className="arrowicon">
        <p>
          <HiArrowRight />
        </p>
      </div>
      <p className="modal-footer">CREATE ACCOUNT</p>
    </div>
  );
};

export default SignIn;
