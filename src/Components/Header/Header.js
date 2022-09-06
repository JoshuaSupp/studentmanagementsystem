import React from "react";
import { NavLink, withRouter } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/loginpic.svg";
import { ReactComponent as Home } from "../../assets/home.svg";
import { ReactComponent as Explore } from "../../assets/explore.svg";
import "./header.css";
const Header = ({ history, isLogged }) => {
  const handleClick = () => {
    history.push("/");
    isLogged(false);
  };
  return (
    <nav>
      <div className="div-header">
        <div className="div-svg" onClick={() => history.push("/")}></div>

        <NavLink exact to="/" activeClassName="active">
          <Home className="div-svg" />
        </NavLink>
        <button className="button-header" onClick={handleClick}>
          Log out
        </button>
      </div>
    </nav>
  );
};

export default withRouter(Header);
