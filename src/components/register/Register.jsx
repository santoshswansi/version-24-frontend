import { useState } from "react";
import axios from "axios";
import "./Register.css";
// import versionLogo from "/version.svg";
import themeLogo from "/geniusynth.svg";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState(null);
  const [college, setCollege] = useState("");
  const [rollNumber, setRollNumber] = useState(null);

  //   console.log(username, email, password);
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (phoneNumber.toString().length != 10) {
      alert("Not a valid Phone Number");
      return;
    }
    axios
      .post("http://localhost:4000/register", {
        username: username,
        email: email,
        college: college,
        password: password,
        rollNumber: rollNumber,
        phoneNumber: phoneNumber,
      })
      .response((data) => console.log(data))
      .catch((error) => console.log(error));
  };

  return (
    <div className="register-container">
      <img src={themeLogo} className="register-theme-logo" />
      <div className="form-container">
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
            type="text"
            id="college"
            name="college"
            placeholder="COLLEGE"
            required
            onChange={(e) => setCollege(e.target.value)}
          ></input>
          <input
            type="number"
            id="rollNumber"
            name="rollNumber"
            placeholder="ROLL NUMBER"
            required
            onChange={(e) => setRollNumber(e.target.value)}
          ></input>
          <input
            type="number"
            id="phoneNumber"
            name="phoneNumber"
            placeholder="PHONE NUMBER"
            required
            onChange={(e) => setPhoneNumber(e.target.value)}
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
    </div>
  );
};

export default Register;
