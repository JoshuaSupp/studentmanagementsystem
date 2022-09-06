import React from "react";
import "./404Page.css";

const NoMatch = ({ history }) => {
  return (
    <div class="Pagebody">
      <div style={{ marginLeft: "10px" }}>
        <h2>404Page</h2>
        <p>
          Redirecting to{" "}
          <span
            style={{ color: "dodgerblue", cursor: "pointer" }}
            onClick={() => history.push("/")}
          >
            Login Page
          </span>
        </p>
      </div>
    </div>
  );
};

export default NoMatch;
