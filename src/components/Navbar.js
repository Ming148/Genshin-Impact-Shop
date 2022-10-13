import React from "react";
import logo from "./images/ghenshin-impact-store-logo.png";
import Navbar_item, { Navbar_item_expends } from "./Navbar-item.js";
import Actions from "./Navbar-actions";

const Navbar = () => {
  return (
    <div class="nav">
      <div class="nav-logo">
        <a class="logo" href="#">
          <img style={{ width: "35%" }} src={logo} />
        </a>
      </div>
      <div class="nav-merge-item">
        <Navbar_item_expends value="APPAREL" />
        <Navbar_item_expends value="COLLECTIBLES" />
        <Navbar_item_expends value="ACCESSORIES" />
        <Navbar_item value="SALE" />
        <Navbar_item value="ART" />
      </div>
      <Actions />
    </div>
  );
};

export default Navbar;
