/* eslint-disable react/prop-types */
import "./Navbar.css";

import versionLogo from "../../assets/svg/version.svg";
import dots from "../../assets/svg/dots.svg";

const Navbar = ({ expanded, setExpanded }) => {
  return (
    <div id="collapse-nav-container">
      <img src={versionLogo} alt="Version logo" id="collapse-logo" />
      <div id="collapse-nav">
        <a href="/" className="collapse-nav-item">
          Home
        </a>
        <a href="/about" className="collapse-nav-item">
          About
        </a>
        <a href="/events" className="collapse-nav-item">
          Events
        </a>
        <a href="/teams" className="collapse-nav-item">
          Teams
        </a>
        <a href="/login" className="collapse-nav-item">
          Login
        </a>
        <div id="dots-container" onClick={() => setExpanded(!expanded)}>
          <img src={dots} alt="Dots" id="dots" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;