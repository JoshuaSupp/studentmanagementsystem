import React from "react";
import Sidebar from "../../Components/Sidebar/Sidebar";
import "./newhome.css";
import { ReactComponent as meulogo } from "../../assets/meulogo.svg";
const NewHome = () => {
  return (
    <div>
      <Sidebar />

      <meulogo />
    </div>
  );
};

export default NewHome;
