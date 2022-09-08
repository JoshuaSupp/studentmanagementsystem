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
      <h2>Product Design </h2>
      <img className="imgclass" src="" alt="" />
      <div class="row">
        <div class="column">
          <img
            src="https://meulabs.org/wp-content/uploads/2022/08/why-enjoy-img-1-1.webp"
            alt="Snow"
          />
        </div>
        <div class="column">
          <img src="img_forest.jpg" alt="Forest" />
        </div>
        <div class="column">
          <img src="img_mountains.jpg" alt="Mountains" />
        </div>
      </div>
    </div>
  );
};

export default NewHome;
