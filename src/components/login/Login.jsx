/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Login.css";

const Login = () => {
  const [userMail, setUserMail] = useState("");
  const [userPass, setUserPass] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    const data = {
      email: userMail,
      password: userPass,
    };
    axios
      .post(`${__URL__}/login`, { ...data }, { withCredentials: true })
      .then((response) => {
        if (response.data?.status === "success") {
          alert(response.data?.message);
          navigate("/");
        }
      })
      .catch((err) => {
        alert("Password too small, must contain atleast 8 characters.");
      });
  }

  return (
    <div className="login-container">
      <div className="login-form-container">
        <form onSubmit={(e) => handleSubmit(e)}>
          <h2 className="sign-in">Sign In</h2>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="EMAIL"
            value={userMail}
            required
            onChange={(e) => setUserMail(e.target.value)}
          ></input>
          <input
            type="password"
            id="password"
            name="password"
            required
            value={userPass}
            placeholder="PASSWORD"
            onChange={(e) => setUserPass(e.target.value)}
          ></input>
          <p
            className="forgot-password"
            onClick={() => {
              navigate("/forgot-password");
            }}
          >
            Forgot password
          </p>
          <button className="submit-button">Submit</button>
          <p className="register-footer">Don't have an account?</p>
          <button
            className="register-redirect"
            onClick={() => {
              navigate("/register");
            }}
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
