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
      <div className={`nav-item ${props.margin}`}>
        <p>{props.value}</p>
      </div>
    </a>
  );
};

const Navbar_item_expends = (props) => {
  return (
    <a href={props.link}>
      <div
        className="nav-item expends"
        onMouseEnter={() => {
          document.getElementsByClassName("expends-wrapper")[0].style.display = "block";
        }}
        onMouseLeave={() => {
          document.getElementsByClassName("expends-wrapper")[0].style.display = "none";
        }}
      >
        <p>{props.value}</p>
        <RiArrowDownSFill
          style={{
            color: "#444",
            fontSize: "1.25vw",
          }}
        />
      </div>
    </a>
  );
};

const Item_expends = () => {
  return <div className="expends-wrapper"></div>;
};

const Navbar_actions = (props) => {
  return (
    <div className="nav-actions">
      <a href="#">
        <MdLanguage
          style={{
            paddingRight: "1vw",
            transform: "translateY(0.075vw)",
            fontSize: "1.25vw",
          }}
        />
      </a>
      <div className="searchbar">
        <input
          className="searchbar-input"
          placeholder="SEARCH"
          type="text"
          size={12}
        />
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
      <Navbar_item value="SIGN IN" margin="ml-2" link="/SignIn" />
    </div>
  );
};

const Navbar = () => {
  return (
    <div className="navbar-wrapper">
      <div className="nav">
        <div className="nav-logo">
          <a className="logo" href="/">
            <img style={{ width: "30%" }} src={logo} />
          </a>
        </div>
        <div className="nav-merge-item">
          <Navbar_item_expends value="APPAREL" />
          <Navbar_item_expends value="COLLECTIBLES" />
          <Navbar_item_expends value="ACCESSORIES" />
          <Navbar_item value="SALE" link="/Sale" />
          <Navbar_item value="ART" />
        </div>
        <Navbar_actions />
      </div>
      <Item_expends />
    </div>
  );
};

export default Navbar;
