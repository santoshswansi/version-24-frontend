/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
// import versionLogo from "/version.svg";
import themeLogo from "/gensynth.svg";
import "./Login.css";

const Login = () => {
  // const URL = import.meta.env.URL;
  // console.log(URL);
  const [userMail, setUserMail] = useState("");
  const [userPass, setUserPass] = useState("");
  const navigate = useNavigate();
  // console.log(userMail);
  function handleSubmit(e) {
    e.preventDefault();
    // console.log(userMail, userPass);
    const data = {
      email: userMail,
      password: userPass,
    };
    // setUserMail("");
    // setUserPass("");
    console.log(data);
    axios
      .post(
        `http://localhost:4000/api/v1/login`,
        { ...data },
        { withCredentials: true }
      )
      .then((response) => {
        // console.log(response.data);
        if (response.data?.status === "success") {
          alert(response.data?.message);
          navigate("/");
        }
        // axios
        //   .post(`${URL}/user`)
        //   .then((response) => console.log(response))
        //   .catch((err) => console.log(err));
      })
      .catch((err) => {
        alert(err.response.data.error);
      });
  }

  return (
    <div className="login-container">
      {/* <img
        src={versionLogo}
        className="login-version-logo"
      /> */}
      {/* <img src={themeLogo} className="login-theme-logo" /> */}
      {/* <h1>Version</h1> */}
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
