import React from "react";
import { Tabs } from "./Navbar";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import "./AccountModal.css"
import SignIn from "./ContentModal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "38vw",
  height: "38vw",
};

const AccountModal = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <div onClick={handleOpen}>
        <Tabs title="SIGN IN" />
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="modal-container">
            <div className="modal-wrapper">
              <SignIn />
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default AccountModal;
