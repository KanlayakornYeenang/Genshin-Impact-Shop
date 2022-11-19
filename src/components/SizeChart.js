import * as React from "react";
import MuiToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { styled } from "@mui/material/styles";

export const SizeChartHeader = () => {
  return (
    <div
      style={{
        fontSize: "0.85vw",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <div>SIZE</div>
      <div style={{ textDecoration: "underline", opacity: "0.5" }}>
        Sizing Chart
      </div>
    </div>
  );
};

const ToggleButton = styled(MuiToggleButton)(({ selectedColor }) => ({
  "&.Mui-selected, &.Mui-selected:hover": {
    color: "black",
    backgroundColor: selectedColor,
  },
}));

const SizeChart = ({handleCurrentSize}) => {
  const [size, setSize] = React.useState('xs');
  const handleSize = (e, newSize) => {
    setSize(newSize);
    handleCurrentSize(newSize)
  };

  const ToggleButtonStyle = {
    color: "white",
    border: "0.1vw solid white",
    "&.MuiToggleButtonGroup-grouped": {
      borderRadius: "0.35vw !important",
      border: "1px solid lightgrey !important",
      width: "14.17%",
      padding: "0.35vw 0vw",
      fontSize: "0.85vw",
    },
  };

  return (
    <ToggleButtonGroup
      value={size}
      exclusive
      onChange={handleSize}
      sx={{ display: "flex", flexFlow: "wrap", gap: "3%" }}
    >
      <ToggleButton value="xs" selectedColor="#ffffff" sx={ToggleButtonStyle}>
        XS
      </ToggleButton>
      <ToggleButton value="s" selectedColor="#ffffff" sx={ToggleButtonStyle}>
        S
      </ToggleButton>
      <ToggleButton value="m" selectedColor="#ffffff" sx={ToggleButtonStyle}>
        M
      </ToggleButton>
      <ToggleButton value="l" selectedColor="#ffffff" sx={ToggleButtonStyle}>
        L
      </ToggleButton>
      <ToggleButton value="xl" selectedColor="#ffffff" sx={ToggleButtonStyle}>
        XL
      </ToggleButton>
      <ToggleButton value="2xl" selectedColor="#ffffff" sx={ToggleButtonStyle}>
        2XL
      </ToggleButton>
    </ToggleButtonGroup>
  );
};


export default SizeChart;
