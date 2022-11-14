import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { MdExpandLess } from "react-icons/md";

const SimpleAccordion = (props) => {
  return (
    <div>
      <Accordion
        sx={{
          backgroundColor: "transparent",
          fontSize: "1vw",
          color: "white",
          borderTop: "0.1vw solid rgba(255, 255, 255, 0.5)",
          borderBottom: "0.1vw solid rgba(255, 255, 255, 0.5)",
        }}
        square="true"
        defaultExpanded="true"
      >
        <div className="MuiAccordion">
          <AccordionSummary
            expandIcon={
              <MdExpandLess style={{ color: "white", fontSize: "1.5vw" }} />
            }
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography
              sx={{
                fontFamily: "HYWenHei",
                fontSize: "1vw",
                letterSpacing: "0.05vw",
              }}
            >
              DESCRIPTION
            </Typography>
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
