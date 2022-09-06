import React from "react";
import { ReactComponent as Logo } from "../../assets/loginpic.svg";
import "./login.css";
class Login extends React.Component {
  state = {
    email: "joshuasupp@gmail",
    pwd: "123",
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.isLogin(true);
  };
  render() {
    return (
      <div className="div-login">
        <Logo />
        <div className="div-login-logo"></div>
        <div>
          <form class="loginform" onSubmit={this.handleSubmit}>
            <input
              type="email"
              name="email"
              placeholder="email..."
              required
              onChange={this.handleChange}
            />
            <input
              type="password"
              name="pwd"
              placeholder="password..."
              required
              onChange={this.handleChange}
            />
            <button class="loginbutton" onSubmit={this.handleSubmit}>
              Log In
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
