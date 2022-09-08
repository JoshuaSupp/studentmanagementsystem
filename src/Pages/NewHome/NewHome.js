import React from "react";
import Sidebar from "../../Components/Sidebar/Sidebar";
import "./newhome.css";
import { ReactComponent as Meulogo } from "../../assets/meulabslogo.svg";
const NewHome = () => {
  return (
    <div>
      <Sidebar />
      <div className="meulabslogo">
        <Meulogo />
      </div>
    </div>
  );
};

export default NewHome;
