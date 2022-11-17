import React, { useState } from "react";
import { FormControl, InputLabel, OutlinedInput } from "@mui/material";
import styled from "@emotion/styled";

const StyledOutlineInput = styled(OutlinedInput)({
  borderRadius: "2.2vw",
  "& .MuiOutlinedInput-input": {
    paddingTop: "1.2vw",
    paddingBottom: "0.35vw",
    fontFamily: "HYWenHei",
  },
});

const SignIn = () => {
  const [value, setValue] = useState("");

  return (
    <div className="modal-content">
      <h1>Sign In</h1>
      <FormControl>
        <InputLabel variant="filled" className="inputlabel">USERNAME</InputLabel>
        <StyledOutlineInput
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </FormControl>
    </div>
  );
};

export default SignIn;
