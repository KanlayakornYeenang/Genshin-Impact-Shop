import React from "react";
import Popup from "reactjs-popup";
import { Tabs } from "./Navbar";
import "./PopUpSignIn.css";
import { HiArrowRight } from "react-icons/hi";
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";
import { useRef } from "react";
import { TextField } from "@mui/material";
import styled from "@emotion/styled";

const GoToEmail = () => {
    document.getElementsByClassName("signin-h1")[0].style.display = "none";
    document.getElementsByClassName("singin-input-container")[0].style.display = "none";
    document.getElementsByClassName("createac")[0].style.display = "none";
    document.getElementsByClassName("textfield-email")[0].style.display = "flex";
    document.getElementsByClassName("create-email-h1")[0].style.display = "block";
    document.getElementsByClassName("already-ac")[0].style.display = "block";
    document.getElementsByClassName("login")[0].style.display = "none";
    document.getElementsByClassName("create-email")[0].style.display = "flex";
}

const GoBackSignIn = () => {
    document.getElementsByClassName("signin-h1")[0].style.display = "block";
    document.getElementsByClassName("singin-input-container")[0].style.display = "flex";
    document.getElementsByClassName("createac")[0].style.display = "block";
    document.getElementsByClassName("textfield-email")[0].style.display = "none";
    document.getElementsByClassName("create-email-h1")[0].style.display = "none";
    document.getElementsByClassName("already-ac")[0].style.display = "none";
    document.getElementsByClassName("login")[0].style.display = "flex";
    document.getElementsByClassName("create-email")[0].style.display = "none";
}

const GoToUsername = () => {
    document.getElementsByClassName("textfield-email")[0].style.display = "none";
    document.getElementsByClassName("create-email-h1")[0].style.display = "none";
    document.getElementsByClassName("already-ac")[0].style.display = "none";
    document.getElementsByClassName("create-email")[0].style.display = "none";
    document.getElementsByClassName("create-username-h1")[0].style.display = "block";
    document.getElementsByClassName("username-detail")[0].style.display = "block";
    document.getElementsByClassName("textfield-username")[0].style.display = "block";
    document.getElementsByClassName("create-username")[0].style.display = "flex";
}

const GoToPassword = () => {
    document.getElementsByClassName("create-username-h1")[0].style.display = "none";
    document.getElementsByClassName("username-detail")[0].style.display = "none";
    document.getElementsByClassName("textfield-username")[0].style.display = "none";
    document.getElementsByClassName("create-username")[0].style.display = "none";
    document.getElementsByClassName("create-password-h1")[0].style.display = "block";
    document.getElementsByClassName("password-detail")[0].style.display = "block";
    document.getElementsByClassName("textfield-password")[0].style.display = "flex";
    document.getElementsByClassName("create-password")[0].style.display = "flex";
}

const CSSTextField = styled(TextField)({
    width: '100%',
    '& #filled-basic':{
        fontFamily: 'HYWenHei',
        padding: '2vw 4.5vw 0.5vw 2vw',
        fontSize: '120%',
    },
    '& .css-e4w4as-MuiFormLabel-root-MuiInputLabel-root':{
        fontFamily: 'HYWenHei',
        padding: '0vw 2.5vw 0vw 1vw',
        fontSize: '120%',
    },
    '& .css-o943dk-MuiFormLabel-root-MuiInputLabel-root':{
        fontFamily: 'HYWenHei',
        padding: '0vw 2.5vw 0vw 1vw',
        fontSize: '120%',
    },
    '& .css-19mk8g1-MuiInputBase-root-MuiFilledInput-root':{
        fontFamily: 'HYWenHei',
        padding: '0vw 2.5vw 0vw 1vw',
        fontSize: '120%',
    },
    '& .css-o943dk-MuiFormLabel-root-MuiInputLabel-root.Mui-focused':{
        color: "rgb(96 96 96)"
    },
    '& .css-19mk8g1-MuiInputBase-root-MuiFilledInput-root':{
        borderRadius: '2.2vw',
        border: '0.2vw solid rgba(17, 17, 17, 0)',
        transition: '0.2s linear',
    },
    '& .css-19mk8g1-MuiInputBase-root-MuiFilledInput-root.Mui-focused':{
        border: '0.2vw solid #111'
    },
    '& .css-e4w4as-MuiFormLabel-root-MuiInputLabel-root':{
        paddingTop: '0.5vh'
    },
    '& #filled-basic-label':{
        fontFamily: 'HYWenHei',
        padding: '0.3vw 2.5vw 0vw 2vw',
        fontSize: '120%',
    },
    '& .css-19mk8g1-MuiInputBase-root-MuiFilledInput-root:before':{
        border: 0
    },
    '& .css-19mk8g1-MuiInputBase-root-MuiFilledInput-root:hover:not(.Mui-disable):before':{
        border: 0
    },
    '& .css-19mk8g1-MuiInputBase-root-MuiFilledInput-root:after':{
        border: 0
    }
})

export const ShowPassword = () => {
    const [passwordShown, setPasswordShown] = useState(false);
    const togglePassword = () => {
        setPasswordShown(!passwordShown);
    };
    return (
        <div className="signin-input-wrapper">
            <CSSTextField className="signin-input" id="filled-basic" label="PASSWORD" variant="filled" type={passwordShown ? "text" : "password"} />
            <button className="eye" onClick={togglePassword}>
                {passwordShown ? <BsFillEyeFill /> : <BsFillEyeSlashFill />}
            </button>
        </div>
    );
};


const PopUpSignIn = () => {
    const ref = useRef();
    const closeTooltip = () => ref.current.close();
    return (
        <div className="signin">
            <Popup
                ref={ref}
                trigger={
                    <div>
                        <Tabs title={"SIGN IN"} />
                    </div>
                }
                modal
                nested
            >
                <div className="frame-circle">
                    <button className="close" onClick={closeTooltip}>
                        <p>
                            <IoMdClose />
                        </p>
                    </button>
                    <div className="frame-circle-in">
                        <h1 className="signin-h1">Sign In</h1>
                        <h1 className="create-email-h1">What's your email?</h1>
                        <h1 className="create-username-h1">Choose a username</h1>
                        <h1 className="create-password-h1">Choose a password</h1>
                        <p className="username-detail">Used for sign in to all our games.</p>
                        <p className="password-detail">Make sure it's a good one.</p>
                        <div className="singin-input-container">
                            <div className="signin-input-wrapper">
                                <CSSTextField className="signin-input" id="filled-basic" label="USERNAME" variant="filled"/>
                            </div>
                            <ShowPassword />
                        </div>
                        <div className="textfield-email">
                            <CSSTextField className="signin-input" id="filled-basic" label="EMAIL" variant="filled"/>
                        </div>
                        <div className="textfield-username">
                            <CSSTextField className="signin-input" id="filled-basic" label="USERNAME" variant="filled"/>
                        </div>
                        <div className="textfield-password">
                            <CSSTextField className="signin-input" id="filled-basic" label="PASSWORD" variant="filled"/>
                            <CSSTextField className="signin-input" id="filled-basic" label="CONFIRM PASSWORD" variant="filled"/>
                        </div>
                        <div className="login">
                            <HiArrowRight />
                        </div>
                        <div className="create-email" onClick={GoToUsername}>
                            <HiArrowRight />
                        </div>
                        <div className="create-username" onClick={GoToPassword}>
                            <HiArrowRight />
                        </div>
                        <div className="create-password">
                            <HiArrowRight />
                        </div>
                        <div className="createac" onClick={GoToEmail}>CREATE ACCOUNT</div>
                        <div className="already-ac" onClick={GoBackSignIn}>ALREADY HAVE AN ACCOUNT?</div>
                    </div>
                </div>
                <div className="fade"></div>
            </Popup>
        </div>
    );
};

export default PopUpSignIn;
