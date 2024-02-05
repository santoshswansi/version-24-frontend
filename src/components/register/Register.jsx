import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Register.css";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState(null);
  const [college, setCollege] = useState("");
  const [rollNumber, setRollNumber] = useState(null);
  const navigate = useNavigate();
  const URL = import.meta.env.URL;
  //   console.log(username, email, password);
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (phoneNumber.toString().length != 10) {
      alert("Not a valid Phone Number");
      return;
    }
    axios
      .post(`${__URL__}/signup`, {
        name: username,
        email: email,
        university: college,
        password: password,
        // rollNumber: rollNumber,
        mobile: phoneNumber,
      })
      .then((response) => {
        if (response.data?.status === "success") alert(response.data.message);
        navigate("/login");
      })
      .catch((error) => {
        // console.log(error);
        alert(error.response.data.error);
      });
  };

  return (
    <div className="register-container">
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
          <button
            className="login-redirect"
            onClick={() => {
              navigate("/login");
            }}
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
