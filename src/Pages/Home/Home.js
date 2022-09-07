import React from "react";
import { Switch, Route } from "react-router-dom";
import Header from "../../Components/Header/Header";
import NewHome from "../NewHome/NewHome";
import Profile from "../Profile/Profile";
import Users from "../Users/Users";
import Classes from "../Classes/Classes";
import Teachers from "../Teachers/Teachers";
import KXStudents from "../KXStudents/KXStudents";
const Home = ({ handleLogged }) => {
  return (
    <div>
      <Header isLogged={handleLogged} />
      <Switch>
        <Route exact path="/" component={NewHome} />
        <Route exact path="/classes" component={Classes} />
        <Route exact path="/teachers" component={Teachers} />
        <Route exact path="/kxstudents" component={KXStudents} />
        <Route exact path="/users" component={Users} />
        <Route path="/:username" component={Profile} />
      </Switch>
    </div>
  );
};

export default Home;
