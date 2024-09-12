import React from "react";
import "./LoginSignup.css";

export const LoginSignup = () => {
  return (
    <div className="loginsignup">
      <div className="login-signup-container">
        <h1>Signup</h1>
        <div className="login-signup-fields">

          <input type="text" placeholder="Your name" />
          <input type="email" placeholder="Email Address" />
          <input type="password" placeholder="Password" />
        </div>

        <button>Continue</button>
        <p className="loginsignup-login">Alredy have an account? <span>Login here</span></p>
        <div className="loginsignup-agree">
          <input type="checkbox" name="" id="" />
          <p>I agree to the terms of use & privacy policy</p>
        </div>
        
      </div>
    </div>
  );
};
export default LoginSignup;
