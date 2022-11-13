import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { MdExpandLess } from "react-icons/md";
import "../components/Accordion.css";

const SimpleAccordion = (props) => {
  return (
    <div>
      <Accordion
        sx={{
          backgroundColor: "transparent",
          fontFamily: "HYWenHei",
          fontSize: "1vw",
          color: "white"
        }}
      >
        <div className="MuiAccordion">
          <AccordionSummary
            expandIcon={<MdExpandLess style={{ color: "white", fontSize: "1.5vw"}}/>}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>DESCRIPTION</Typography>
          </AccordionSummary>
        </div>

        <AccordionDetails>
          <Typography>{props.details}</Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default SimpleAccordion;
