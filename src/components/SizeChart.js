import React, { useState } from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

const SizeChart = () => {
  const [size, setSize] = useState()
  const handleSizeChange = (e, newValue) => {
    setSize(newValue);
  };
  const StyleToggleButton = {
    color: "white",
    outline: "white solid 0.1vw",
    fontSize: "0.75vw",
    width: "15%",
    padding: "0.25vw 0vw",
    borderRadius: "0",
  };
  return (
    <div style={{ display: "flex", flexFlow: "column", rowGap: "1vw" }}>
      <div style={{ fontSize: "1vw" }}>SIZE</div>
      <ToggleButtonGroup
      color="primary"
        value={size}
        exclusive
        onChange={handleSizeChange}
        sx={{
          display: "flex",
          flexFlow: "wrap",
          gap: "1vw",
        }}
      >
        <ToggleButton value="xs" sx={StyleToggleButton}>
          XS
        </ToggleButton>
        <ToggleButton value="s" sx={StyleToggleButton}>
          S
        </ToggleButton>
        <ToggleButton value="m" sx={StyleToggleButton}>
          M
        </ToggleButton>
        <ToggleButton value="l" sx={StyleToggleButton}>
          L
        </ToggleButton>
        <ToggleButton value="xl" sx={StyleToggleButton}>
          XL
        </ToggleButton>
        <ToggleButton value="2xl" sx={StyleToggleButton}>
          2XL
        </ToggleButton>
      </ToggleButtonGroup>
    </div>
  );
};

export default SizeChart;
