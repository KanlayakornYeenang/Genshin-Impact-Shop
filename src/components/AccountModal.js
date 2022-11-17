import React, { useState, useEffect, useRef } from "react";
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
  outline: "none",
};

const AccountModal = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setPopup("SignIn");
  };

  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [account, setAccount] = useState([]);

  const didMount = useRef(false);

  useEffect(() => {
    if (didMount.current) {
      // ตอนที่ไม่ได้โหลดหน้าครั้งแรก (ตอนอัพเดต) เพิ่ม account เข้า localStorage
      // console.log(account)
      localStorage.setItem("account", JSON.stringify(account));
    } else {
      // ตอนที่โหลดหน้าครั้งแรกให้ดึงข้อมูลจาก localStorage แล้วทำการ setAccount ก็จะกลับไป update ที่เงื่อนไข if ข้างบนอีกที
      didMount.current = true;
      const saveAccount = localStorage.getItem("account");
      // console.log(JSON.parse(saveAccount))
      setAccount(JSON.parse(saveAccount));
    }
  }, [account]);

  const [popup, setPopup] = React.useState("SignIn");
  const handleClick = (popupState, submit) => {
    setPopup(popupState);
    if (popupState == "Done") {
      // ถ้ากดไปต่อตรงหน้าสร้าง Password ให้ทำการเพิ่ม email, username, password ลง account โดยเก็บเป็น list
      setAccount([
        ...account,
        {
          email: email,
          username: username,
          password: password,
        },
      ]);
    }
    // console.log(submit);
    // console.log(popupState);
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
                    return (
                      <SignIn handleClick={handleClick} account={account} />
                    );
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
                    return handleClose();
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
