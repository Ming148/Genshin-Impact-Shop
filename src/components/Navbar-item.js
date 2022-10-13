import React from "react";
import { RiArrowDownSFill } from "react-icons/ri";

const Navbar_item = (props) => {
  return (
    <div className={`nav-item ${props.margin}`}>
      <a href="#">{props.value}</a>
    </div>
  )
}

export const Navbar_item_expends = (props) => {
  return (
    <div class="nav-item expends">
      <a href="#">
        {props.value}
        <RiArrowDownSFill color="#444" />
      </a>
    </div>
  )
}

export default Navbar_item