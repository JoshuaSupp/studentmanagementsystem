import React from "react";
import Sidebar from "../../Components/Sidebar/Sidebar";
import "./newhome.css";
import { ReactComponent as Meulogo } from "../../assets/meulabslogo.svg";
const NewHome = () => {
  return (
    <div>
      <Sidebar />
      <div class="stheading">
        <h2> Student Management System</h2>
      </div>
      <div class="meulabslogo">
        <Meulogo />
      </div>
    </div>
  );
};

export default NewHome;
