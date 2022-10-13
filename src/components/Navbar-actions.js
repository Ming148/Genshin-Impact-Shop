import React from "react";
import { MdLanguage } from "react-icons/md";
import { BiSearch } from "react-icons/bi";
import { BsCart4 } from "react-icons/bs";
import Navbar_item from "./Navbar-item.js";

const Actions = () => {
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
      <Navbar_item value="SIGN IN" margin="ml-2" />
    </div>
  )
}

export default Actions