import { useState } from "react";
import { assets } from "../assets/assets";
import "./SigninSignUp.css"
const SigninSignUp = ({setPopUp}) => {
    const [currentState,setCurrentState]=useState("Login");
    return (
        < div className="login-popup">
            <form className="login-popup-container">
                <div className="login-popup-title">
                    <h2>{currentState}</h2>
                    <img onClick={() => setPopUp(false)} src={assets.cross_icon} alt="" />
                </div>
                <div className="login-popup-inputs">
                    {currentState === "Login" ? <></> : <input type="text" placeholder='Your name' required />}
                    <input type="email" placeholder='Your email' required /> <input type="password" placeholder='Password' required />
                </div>
                <button>{currentState === "Sign Up" ? "Create account" : "Login"}</button>
                <div className="login-popup-condition">
                    <input type="checkbox" required />
                    <p>By continuing, i agree to the terms of use & privacy policy.</p>
                </div>
                <div className="login-popup-changeState">
                {currentState==="Login" ? <p>Create a New Account ? <span onClick={()=>setCurrentState("Sign Up")}>Register here</span></p>:
                     <p>Already have an Account ? <span onClick={()=>setCurrentState("Login")}>Login here</span></p>
                   }
                </div>

            </form>
        </div>
    )
}
export default SigninSignUp;    