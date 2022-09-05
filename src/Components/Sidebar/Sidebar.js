import React from "react";
import "./sidebar.css";
import * as FaIcons from "react-icons/fa";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <>
      <div className="Sidebar">
        <Link to="#" className="menu-bars"></Link>
        <FaIcons.FaBars />
      </div>
    </>
  );
}

export default Sidebar;
