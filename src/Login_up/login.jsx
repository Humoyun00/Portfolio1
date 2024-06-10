import './login.css'
// import logo from '../img/logo.svg'
import React, { useState } from 'react'

import user_icon from '../images/person.png'
import email_icon from '../images/email.svg'
import password_icon from '../images/password.svg'
import { Toaster, toast } from "sonner";

export default function login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");



    // const testEmail = () => {
    //     const uppercaseRegex = /[A-Z]/;
    //     const lowercaseRegex = /[a-z]/;
    //     const digitRegex = /[0-9]/;
    //     if (!pattern.test(email)) {
    //         setEmailError("Elektronpochta xato");
    //     } else {
    //         setEmailError("");
    //     }
    // };
    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     testEmail();
    //     testPassword();

    //     if (!uppercaseRegex.test(password) || !lowercaseRegex.test(password) || !digitRegex.test(password) || password.length < 8) {
    //         setPasswordError("Parol juda qisqa yoki notugri formatda");
    //     } else {
    //         setPasswordError("");
    //     }
    // };

    const handleSubmit = (e) => {
        e.preventDefault();
        testEmail();
        testPassword();
       
        if (!emailError && !passwordError) {
            toast.success("Success message", { position: "top-right" });
        }
    };
    

    const [action, setAction] = useState("Login")

    return (
        <div className='weaper'>
            <div className='containerr'>
                <div className="header">
                    <div className="text">{action}</div>
                    <div className="underline"></div>
                </div>
                <div className="inputs">
                    {action === "Login" ? <div></div> : <div className="input">
                        <img src={user_icon} alt="" />
                        <input type="text" placeholder='Ism' />
                    </div>}

                    <div className="input">
                        <img src={email_icon} alt="" />
                        <input type="email" value={email}
                            onChange={(e) => setEmail(e.target.value)} placeholder='Email ID' />
                        {emailError && <span className="xato">{emailError}</span>}
                    </div>
                    <div className="input">
                        <img src={password_icon} alt="" />
                        <input type="password" value={password}
                            onChange={(e) => setPassword(e.target.value)} placeholder='Password' />
                        {passwordError && (
                            <span className="xato">{passwordError}</span>
                        )}
                    </div>
                </div>
                {action === "Sign Up" ? <div></div> : <div className="forgot-password">Lost Password? <span>Click Here!</span></div>}
                <div className="submit-container">
                    <div className={action === "Login" ? "submit gray" : "submit"} onClick={(handleSubmit) => { setAction("Sign Up") }}>Sign up</div>
                    <div className={action === "Sign Up" ? "submit gray" : "submit"} onClick={(handleSubmit) => { setAction("Login") }}>Login</div>
                </div>
            </div>
        </div>
    )
}
