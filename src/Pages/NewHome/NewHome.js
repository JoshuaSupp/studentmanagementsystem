import React from "react";
import Sidebar from "../../Components/Sidebar/Sidebar";
import "./newhome.css";
import { ReactComponent as meulogo } from "../../assets/meulabslogo.svg";
const NewHome = () => {
  return (
    <div>
      <Sidebar />

      <meulogo />
    </div>
  );
};

export default NewHome;
