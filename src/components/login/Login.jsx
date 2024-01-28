/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import axios from "axios";
// import versionLogo from "/version.svg";
import themeLogo from "/geniusynth.svg";
import "./Login.css";

const Login = () => {
  const [userMail, setUserMail] = useState("");
  const [userPass, setUserPass] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    console.log(userMail, userPass);
    const data = {
      username: userMail,
      password: userPass,
    };
    setUserMail("");
    setUserPass("");
    axios
      .post("http://localhost:5000/login", {
        data,
      })
      .then((response) => console.log(response.data))
      .catch((err) => console.log(err));
  }

  return (
    <div className="login-container">
      {/* <img
        src={versionLogo}
        className="login-version-logo"
      /> */}
      <img src={themeLogo} className="login-theme-logo" />
      {/* <h1>Version</h1> */}
      <div className="login-form-container">
        <form action="POST" onSubmit={(e) => handleSubmit(e)}>
          <h2 className="sign-in">Sign In</h2>
          <input
            type="email"
            id="email"
            name="username"
            placeholder="EMAIL"
            required
            onChange={(e) => setUserMail(e.target.value)}
          ></input>
          <input
            type="password"
            id="password"
            name="password"
            required
            placeholder="PASSWORD"
            onChange={(e) => setUserPass(e.target.value)}
          ></input>
          <a href="/forgot-password" className="forgot-password">
            Forgot password
          </a>
          <button className="submit-button">Submit</button>
          <p className="register-footer">Don't have an account?</p>
          <a href="/register" className="register-redirect">
            Sign Up
          </a>
        </form>
      </div>
    </div>
  );
};

export default Login;
