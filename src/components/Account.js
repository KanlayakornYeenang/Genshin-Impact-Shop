import React from "react";
import {useState} from "react";

const Account = (props) => {
    const [email, setEmail] = useState('');
    const [username, setUserame] = useState('');
    const [password, setPassword] = useState('');

    const handle = () => {
        localStorage.setItem('Email', email);
        localStorage.setItem('Username', username);
        localStorage.setItem('Password', password);
    }
    
};

export default Account;