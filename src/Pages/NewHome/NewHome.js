import React from "react";
import Sidebar from "../../Components/Sidebar/Sidebar";
import "./newhome.css";

const NewHome = () => {
  return (
    <div class="newhomebody">
      <Sidebar />
      <div>
        <img
          src="https://meulabs.org/wp-content/uploads/2022/08/Logo.webp"
          alt="meulabs"
        />
      </div>
      <div class="stheading">
        <h2> Student Management System</h2>
      </div>
      <div>
        <h2 class="newclasses"> New Classes </h2>
        <img
          src="https://meulabs.org/wp-content/uploads/2022/08/why-enjoy-img-1-1.webp"
          alt="car"
        />
      </div>
    </div>
  );
};

export default NewHome;
