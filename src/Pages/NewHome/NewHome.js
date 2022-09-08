import React from "react";
import Sidebar from "../../Components/Sidebar/Sidebar";
import "./newhome.css";
import { ReactComponent as meulogo } from "../../assets/meulabslogo.svg";
const NewHome = () => {
  return (
    <div>
      <Sidebar />
      <div class="meulabslogo">
       <meulogo />
      </div>
     </div>
  );
};

export default NewHome;
