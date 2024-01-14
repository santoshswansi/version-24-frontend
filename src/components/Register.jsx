import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import "./Register.css";
import versionLogo from "/version.svg";
import themeLogo from "/geniusynth.svg";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  //   console.log(username, email, password);
  const handleSubmit = async (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:4000/register", {
        username: username,
        email: email,
        password: password,
      })
      .response((data) => console.log(data));
  };

  return (
    <div className="register-container">
      <img
        src={versionLogo}
        className="version-logo"
        onClick={() => {
          navigate("/");
        }}
      />
      <img src={themeLogo} className="theme-logo" />
      {/* <h1>Version</h1> */}
      <form action="POST" onSubmit={(e) => handleSubmit(e)}>
        <h2 className="create-account">CREATE AN ACCOUNT</h2>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="USERNAME"
          required
          onChange={(e) => setUsername(e.target.value)}
        ></input>
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
        <p className="register-footer">Already have an account?</p>
        <a href="/login" className="login-redirect">
          Sign In
        </a>
      </form>
    </div>
  );
};

export default Register;
