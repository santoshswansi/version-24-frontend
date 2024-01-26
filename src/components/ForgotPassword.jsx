import { useState } from "react";
import axios from "axios";
import "./ForgotPassword.css";
import versionLogo from "/version.svg";
function ForgotPassword() {
  const [Email, setEmail] = useState("");
  const [toggle, setToggle] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [otp, setOTP] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setToggle(false);
    axios
      .post("http://localhost:3000", { email: Email })
      .then((response) => {})
      .catch((err) => console.log(error));
    setEmail("");
  };

  const handleOTPSubmit = (e) => {
    e.preventDefault();
    setToggle(true);
    axios
      .post("http://localhost:3000", {
        otp,
        newPassword,
      })
      .then((response) => {})
      .catch((err) => console.log(err));
  };

  return (
    <div className="forgot-password-container">
      <div className="forgot-inner-container">
        <img src={versionLogo} />
        <p>
          {toggle
            ? "Enter the email address associated with your account and we'll send you a link to reset your password."
            : "Enter the OTP sent to your respective email account"}
        </p>
        {toggle ? (
          <form action="POST" onSubmit={(e) => handleSubmit(e)}>
            <label htmlFor="forgotEmail">Email</label>
            <input
              type="email"
              value={Email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button>Continue</button>
            <p>
              Don't have an account?
              <span>
                <a className="signup-redirect" href="./register">
                  Sign Up
                </a>
              </span>
            </p>
          </form>
        ) : (
          <form action="POST" onSubmit={(e) => handleOTPSubmit(e)}>
            <label htmlFor="otp">OTP</label>
            <input
              type="number"
              name="otp"
              value={otp}
              onChange={(e) => setOTP(e.target.value)}
              required
            />
            <label htmlFor="password">New Password</label>
            <input
              type="text"
              name="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
            />
            <button>Send</button>
          </form>
        )}
      </div>
    </div>
  );
}

export default ForgotPassword;
