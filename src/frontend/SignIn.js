import React from "react";
import "./SignIn.css";
import paimon from "./components/images/8 PAIMON.png";
import { MdLogin } from "react-icons/md";
import frame from "./components/images/frame-circle.png";
import { useState } from "react";

const SignIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const usernameChange = (event) => {
    setUsername(event.target.value);
  };

  const passwordChange = (event) => {
    setPassword(event.target.value);
  };

  if (username.trim().length > 0 && password.trim().length > 0) {

  }

  return (
    <div className="signin-bg">
      <img id="frame-circle" src={frame} />
      <div className="signin-weapper">
        <div className="signin">
          <h1 style={{ textAlign: "center" }}>Sign In</h1>
          <div className="form-input">
            <label>Username</label>
            <input
              type="text"
              id="username"
              className="signin-input"
              onChange={usernameChange}
              value={username}
            />
          </div>
          <div className="form-input">
            <label>Password</label>
            <input
              type="text"
              id="password"
              className="signin-input"
              onChange={passwordChange}
              value={password}
            />
            <div className="checkbox">
              <input type="checkbox" />
              <label>
                <p>Show your password</p>
              </label>
            </div>
          </div>
          <button id="signin-button">
            <MdLogin style={{ color: "#d0cfcf", fontSize: "2vw" }} />
          </button>
          <p id="createac">CREATE ACCOUNT</p>
        </div>
        <img id="paimon" src={paimon} />
      </div>
    </div>
  );
};

export default SignIn;

setTimeout(() => {
  document.getElementById("paimon").style.animation = "1.25s fadein";
  document.getElementById("paimon").style.opacity = "1";
  setTimeout(() => {
    document.getElementById("paimon").style.animation =
      "1.25s linear infinite alternate slideup";
  }, "1000");
}, "100");
