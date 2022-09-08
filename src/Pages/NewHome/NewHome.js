import React from "react";
import Sidebar from "../../Components/Sidebar/Sidebar";
import "./newhome.css";
import { ReactComponent as Meulogo } from "../../assets/meulabslogo.svg";
const NewHome = () => {
  return (
    <div class="newhomebody">
      <Sidebar />
      <div class="meulabslogo">
        <Meulogo />
      </div>
      <div class="stheading">
        <h2> Student Management System</h2>
      </div>
      <div>
        <h2 class="newclasses"> New Classes </h2>
      </div>
    </div>
  );
};

export default NewHome;
