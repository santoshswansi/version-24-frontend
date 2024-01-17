import React, { useState } from "react";
import axios from "axios";
import versionLogo from "/version.svg";
import themeLogo from "/geniusynth-2.svg";
import "./Login.css";
const Login = () => {
  const [userMail, setUserMail] = useState("");
  const [userPass, setUserPass] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    axios.post("http://localhost:5000/login", {});
  }

  return (
    <div className="login-container">
      <img
        src={versionLogo}
        className="login-version-logo"
        onClick={() => {
          navigate("/");
        }}
      />
      <img src={themeLogo} className="login-theme-logo" />
      {/* <h1>Version</h1> */}
      <div className="login-form-container">
        <form action="POST" onSubmit={(e) => handleSubmit(e)}>
          <h2 className="sign-in">Sign In</h2>
          <input
            type="email"
            id="email"
            value="userMail"
            placeholder="EMAIL"
            required
            onChange={(e) => setUserMail(e.target.value)}
          ></input>
          <input
            type="password"
            id="password"
            value="userPass"
            required
            placeholder="PASSWORD"
            onChange={(e) => setUserPass(e.target.value)}
          ></input>
          <button className="submit-button">Submit</button>
          <p className="register-footer">Don't have an account</p>
          <a href="/register" className="register-redirect">
            Sign Up
          </a>
        </form>
      </div>
    </div>
  );
};

export default Login;
