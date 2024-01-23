/* eslint-disable react/prop-types */
import "./NavbarExpand.css";
import versionLogo from "../../assets/svg/version.svg";
import cross from "../../assets/svg/cross.svg";
import arrowRight from "../../assets/svg/arrow-right.svg";

function NavbarExpand({ expanded, setExpanded }) {

  return (
    <div id="expand-nav-wrapper" className={expanded ? "on-expand" : ""}>
      <div id="expand-nav-header">
        <img src={versionLogo} alt="Version logo" id="expand-logo" />
        <div id="cross-container" onClick={() => setExpanded(!expanded)}>
          <img src={cross} alt="Cross" id="cross" />
        </div>
      </div>

      <div id="expand-nav">
        <a href="#home" className="expand-nav-item">
          <sup>01</sup>
          <span>Home</span>
        </a>
        <a href="#theme" className="expand-nav-item">
          <sup>02</sup>
          <span>Theme</span>
        </a>
        <a href="#events" className="expand-nav-item">
          <sup>03</sup>
          <span>Events</span>
        </a>
        <a href="#teams" className="expand-nav-item">
          <sup>04</sup>
          <span>Teams</span>
        </a>
        <a href="#login" className="expand-nav-item">
          <sup>05</sup>
          <span>Login</span>
        </a>
      </div>
      <div id="connect">
        <div id="contact">
          <a href="">
            <img src={arrowRight} className="arrow" alt="arrow" />
            call-version@gmail.com
          </a>
          <a href="">
            <img src={arrowRight} className="arrow" alt="arrow" />
            +91-1192949499
          </a>
        </div>
        <div id="socials">
          <a href="">
            <img src={arrowRight} className="arrow" alt="arrow" />
            INSTAGRAM
          </a>
          <a href="">
            <img src={arrowRight} className="arrow" alt="arrow" />
            LINKEDIN
          </a>
          <a href="">
            <img src={arrowRight} className="arrow" alt="arrow" />
            YOUTUBE
          </a>
        </div>
      </div>
    </div>
  );
}

export default NavbarExpand;
