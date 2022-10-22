import React from "react";
import logo from "./images/ghenshin-impact-store-logo.png";
import { RiArrowDownSFill } from "react-icons/ri";
import { MdLanguage } from "react-icons/md";
import { BiSearch } from "react-icons/bi";
import { BsCart4 } from "react-icons/bs";
import "./Navbar.css";

const Navbar_item = (props) => {
  return (
    <a href={props.link}>
      <div className={`nav-item ${props.margin}`}>{props.value}</div>
    </a>
  );
};

const Navbar_item_expends = (props) => {
  return (
    <a href={props.link}>
      <div class="nav-item expends">
        {props.value}
        <RiArrowDownSFill
          style={{
            color: "#444",
            fontSize: "1.25vw",
          }}
        />
      </div>{" "}
    </a>
  );
};

const Navbar_actions = (props) => {
  return (
    <div class="nav-actions">
      <a href="#">
        <MdLanguage
          style={{
            paddingRight: "1vw",
            transform: "translateY(0.075vw)",
            fontSize: "1.25vw",
          }}
        />
      </a>
      <div class="searchbar">
        <input class="searchbar-input" placeholder="SEARCH" type="text" size={12} />
        <BiSearch
          style={{
            color: "white",
            transform: "translate(0.25vw, 0.055vw)",
            fontSize: "1vw",
          }}
        />
      </div>
      <a href={props.link}>
        <BsCart4 style={{ paddingLeft: "1vw", fontSize: "1.25vw" }} />
      </a>
      <Navbar_item value="SIGN IN" margin="ml-2" link="/SignIn"/>
    </div>
  );
};

const Navbar = () => {
  return (
    <div class="nav">
      <div class="nav-logo">
        <a class="logo" href="/">
          <img style={{ width: "30%" }} src={logo} />
        </a>
      </div>
      <div class="nav-merge-item">
        <Navbar_item_expends value="APPAREL" />
        <Navbar_item_expends value="COLLECTIBLES" />
        <Navbar_item_expends value="ACCESSORIES" />
        <Navbar_item value="SALE" />
        <Navbar_item value="ART" />
      </div>
      <Navbar_actions />
    </div>
  );
};

export default Navbar;
