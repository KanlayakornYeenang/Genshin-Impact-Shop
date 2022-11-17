import React, { useState } from "react";
import { Tabs } from "./Navbar";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import "./AccountModal.css";
import SignIn, { Email, Username, Password } from "./ContentModal";

const StyledBox = {
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
  const handleClose = () => {
    setOpen(false);
    setPopup("SignIn");
  };

  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [popup, setPopup] = React.useState("SignIn");
  const handleClick = (popupState, submit) => {
    setPopup(popupState);
    if (submit != "Nothing") {
      if (popupState == "Username") {
        localStorage.setItem("Email", submit);
      } else if (popupState == "Password") {
        localStorage.setItem("Username", submit);
      } else if (popupState == "Done") {
        localStorage.setItem("Password", submit);
      }
    }
    console.log(submit);
  };

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
        <Box sx={StyledBox}>
          <div className="modal-container">
            <div className="modal-wrapper">
              {(() => {
                switch (popup) {
                  case "SignIn":
                    return <SignIn handleClick={handleClick} />;
                  case "Email":
                    return (
                      <Email
                        handleClick={handleClick}
                        setEmail={setEmail}
                        email={email}
                      />
                    );
                  case "Username":
                    return (
                      <Username
                        handleClick={handleClick}
                        setUsername={setUsername}
                        username={username}
                      />
                    );
                  case "Password":
                    return (
                      <Password
                        handleClick={handleClick}
                        setPassword={setPassword}
                        password={password}
                      />
                    );
                  case "Done":
                    return <SignIn handleClick={handleClick} />;
                  default:
                    return null;
                }
              })()}
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default AccountModal;
