import React from "react";
import "./SignIn.css";
import paimon from "./components/images/8 PAIMON.png";
import { MdLogin } from "react-icons/md";

const SignIn = () => {
  return (
    <div class="signin-bg">
      <div class="signin-weapper">
        <div class="signin">
          <h1 style={{ textAlign: "center" }}>Sign In</h1>
          <div class="form-input">
            <label for="username">Username</label>
            <input type="text" name="username" class="signin-input" />
          </div>
          <div class="form-input">
            <label for="password">Password</label>
            <input type="text" name="password" class="signin-input" />
          </div>
          <button id="signin-button"><MdLogin style={{color:"#d0cfcf", fontSize:"2vw"}}/></button>
          <p id="createac">CREATE ACCOUNT</p>
        </div>
        <img id="paimon" src={paimon} />
      </div>
    </div>
  );
};

export default SignIn;
