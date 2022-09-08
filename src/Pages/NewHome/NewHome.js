import React from "react";
import Sidebar from "../../Components/Sidebar/Sidebar";
import "./newhome.css";

const NewHome = () => {
  return (
    <div class="newhomebody">
      <Sidebar />
      <div>
        <img
          className="meulabslogo"
          src="https://meulabs.org/wp-content/uploads/2022/08/Logo.webp"
          alt="meulabs"
        />
      </div>
      <div class="stheading">
        <h2> Student Management System</h2>
      </div>
      <h2 class="newclasses"> New Classes </h2>
      <img
        className="class"
        src="https://meulabs.org/wp-content/uploads/2022/08/why-enjoy-img-1-1.webp"
        alt=""
      />
    </div>
  );
};

export default NewHome;
