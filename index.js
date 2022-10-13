import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import logo from "./images/ghenshin-impact-store-logo.png";
import lang from "./images/language.png";
import { RiArrowDownSFill } from "react-icons/ri";
import { MdLanguage } from "react-icons/md";
import { BiSearch } from "react-icons/bi";
import { BsCart4 } from "react-icons/bs";

const navbar = (
  <div class="nav">
    <div class="nav-logo">
      <a class="logo" href="#">
        <img style={{ width: "35%" }} src={logo} />
      </a>
    </div>
    <div class="nav-merge-item">
      <div class="nav-item border-hover">
        <a href="#">
          APPAREL <RiArrowDownSFill color="#444" />
        </a>
      </div>
      <div class="nav-item border-hover">
        <a href="#">
          COLLECTIBLES <RiArrowDownSFill color="#444" />
        </a>
      </div>
      <div class="nav-item border-hover">
        <a href="#">
          ACCESSORIES <RiArrowDownSFill color="#444" />
        </a>
      </div>
      <div class="nav-item">
        <a href="#">ART</a>
      </div>
      <div class="nav-item">
        <a href="#">SALE</a>
      </div>
    </div>
    <div class="nav-actions">
      <a>
        <MdLanguage
          style={{
            paddingRight: "1vw",
            transform: "translateY(0.075vw)",
            fontSize: "1.25vw",
          }}
        />
      </a>
      <div class="searchbar">
        <input placeholder="SEARCH" type="text" size={12} />
        <BiSearch
          style={{
            color: "white",
            transform: "translate(0.25vw, 0.055vw)",
            fontSize: "1vw",
          }}
        />
      </div>
      <a href="#">
        <BsCart4 style={{ paddingLeft: "1vw", fontSize: "1.25vw" }} />
      </a>
      <div class="nav-item" style={{marginLeft:"2vw"}}>
        <a href="#">SIGN IN</a>
      </div>
    </div>
  </div>
);
const root = ReactDOM.createRoot(document.getElementById("navbar-root"));
root.render(navbar);

reportWebVitals();
