import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { borderRadius } from "@mui/system";

const SizeChart = () => {
  const StyleToggleButton = {
    color: "white",
    outline: "white solid 0.1vw",
    fontSize: "0.75vw",
    width: "15%",
    padding: "0.25vw 0vw",
    borderRadius: "0"
  };
  return (
    <div style={{display:"flex", flexFlow:"column", rowGap:"1vw"}}>
      <div style={{fontSize:"1vw"}}>SIZE</div>
      <ToggleButtonGroup
        sx={{
          display: "flex",
          flexFlow: "wrap",
          gap: "1vw",
        }}
      >
        <ToggleButton sx={StyleToggleButton}>XS</ToggleButton>
        <ToggleButton sx={StyleToggleButton}>S</ToggleButton>
        <ToggleButton sx={StyleToggleButton}>M</ToggleButton>
        <ToggleButton sx={StyleToggleButton}>L</ToggleButton>
        <ToggleButton sx={StyleToggleButton}>XL</ToggleButton>
        <ToggleButton sx={StyleToggleButton}>2XL</ToggleButton>
      </ToggleButtonGroup>
    </div>
  );
};

export default SizeChart;
