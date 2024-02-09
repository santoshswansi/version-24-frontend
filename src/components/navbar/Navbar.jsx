/* eslint-disable react/prop-types */
import "./Navbar.css";
import { useNavigate } from "react-router-dom";


const Navbar = ({ expanded, setExpanded }) => {
  const navigate = useNavigate();
  
  return (
    <div id="collapse-nav-container">
      <img
        src="/version.svg"
        alt="Version logo"
        id="collapse-logo"
        onClick={() => navigate("/")}
      />
      <div id="collapse-nav">
        <a className="collapse-nav-item" onClick={() => navigate("/")}>
          Home
        </a>
        <a className="collapse-nav-item" onClick={() => navigate("/about")}>
          About
        </a>
        <a className="collapse-nav-item" onClick={() => navigate("/events")}>
          Events
        </a>
        <a className="collapse-nav-item" onClick={() => navigate("/teams")}>
          Teams
        </a>
        <a className="collapse-nav-item" onClick={() => navigate("/login")}>
          Login
        </a>
        <div id="dots-container" onClick={() => setExpanded(!expanded)}>
          <img src="/dots.svg" alt="Dots" id="dots" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;