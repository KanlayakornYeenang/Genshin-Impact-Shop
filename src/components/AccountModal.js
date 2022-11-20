import React, { useState, useEffect, useRef } from "react";
import { Tabs } from "./Navbar";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import "./AccountModal.css";
import SignIn, { Email, Username, Password, Done } from "./ContentModal";
import { AiFillCloseCircle } from "react-icons/ai"

const StyledBox = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "38vw",
  height: "38vw",
  outline: "none"
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
  const [account, setAccount] = useState([{email: "admin@123.com", username: "admin", password: "123456"}]);

  const didMount = useRef(false);

  useEffect(() => {
    if(account == null || account.length == 0){
      setAccount([{email: "admin@123.com", username: "admin", password: "123456"}])
    }
    if(didMount.current){
      // ตอนที่ไม่ได้โหลดหน้าครั้งแรก (ตอนอัพเดต) เพิ่ม account เข้า localStorage
      // console.log(account)
      localStorage.setItem('account', JSON.stringify(account))
    }else{
      // ตอนที่โหลดหน้าครั้งแรกให้ดึงข้อมูลจาก localStorage แล้วทำการ setAccount ก็จะกลับไป update ที่เงื่อนไข if ข้างบนอีกที
      didMount.current = true
      const saveAccount = localStorage.getItem("account")
      // console.log(JSON.parse(saveAccount))
      setAccount(JSON.parse(saveAccount))
    }

  }, [account])
  

  const [popup, setPopup] = React.useState("SignIn");
  const handleClick = (popupState, submit) => {
    // console.log(popupState)
    setPopup(popupState);
    if (popupState == "Refresh") {
      // ถ้ากดไปต่อตรงหน้าสร้าง Password ให้ทำการเพิ่ม email, username, password ลง account โดยเก็บเป็น list
      // console.log(email, username, password)
      document.location.reload(true);
      setAccount([
        ...account,
        {
          email: email,
          username: username,
          password: password,
        }
      ])
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
          <AiFillCloseCircle className="close" style={{position:"absolute", color:"white", fontSize:"1.5vw", right:"10%", top:"7%", cursor:"pointer", transition:"0.1s linear"}} onClick={handleClose} />
          <div className="modal-container">
            <div className="modal-wrapper">
              {(() => {
                switch (popup) {
                  case "SignIn":
                    return <SignIn handleClick={handleClick} account={account} />;
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
                    return <Done handleClick={handleClick} />;
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
