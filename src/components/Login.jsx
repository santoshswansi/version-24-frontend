import React from "react";
import versionLogo from "/version.svg";
import themeLogo from "/geniusynth.svg";
import "./Login.css";
const Login = () => {
  function handleSubmit(e) {
    e.preventDefault();
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
            name="email"
            placeholder="EMAIL"
            required
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <input
            type="password"
            id="password"
            name="password"
            required
            placeholder="PASSWORD"
            onChange={(e) => setPassword(e.target.value)}
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
