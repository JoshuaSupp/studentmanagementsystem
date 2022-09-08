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

      <div class="row">
        <div class="column">
          <h2 class="pdtext">Product Design </h2>
          <img
            className="imgclass"
            src="https://meulabs.org/wp-content/uploads/2022/08/why-enjoy-img-1-1.webp"
            alt=""
          />
        </div>

        <div class="column">
          <h2 class="Setext">Software Engineering Specialization </h2>
          <img
            className="imgse"
            src="https://us.123rf.com/450wm/garagestock/garagestock1605/garagestock160507748/57581527-technology-concept-software-engineering.jpg?ver=6"
            alt=""
          />
        </div>

        <div class="column">
          <h2 class="Crtext">Creative Expressions </h2>
          <img
            className="imgce"
            src="https://cdn.mos.cms.futurecdn.net/FQiMdRcDKGsgcxsMfhoXm3.jpg"
            alt=""
          />
        </div>
      </div>

      <div class="row">
        <div class="column">
          <div class="box">
            <div class="aistext"> Admins : 4 </div>
          </div>
        </div>
        <div class="column">
          <div class="box">
            <div class="aistext"> Instructors : 4 </div>
          </div>
        </div>
        <div class="column">
          <div class="box">
            <div class="aistext"> Students : 4 </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewHome;
