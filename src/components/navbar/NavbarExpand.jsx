/* eslint-disable react/prop-types */
import "./NavbarExpand.css";
import versionLogo from "../../assets/svg/version.svg";
import cross from "../../assets/svg/cross.svg";
import arrowRight from "../../assets/svg/arrow-right.svg";

function NavbarExpand({ expanded, setExpanded, focus }) {
  return (
    <div id="expand-nav-wrapper" className={expanded ? "on-expand" : ""}>
      <div id="expand-nav-header">
        <img src={versionLogo} alt="Version logo" id="expand-logo" />
        <div id="cross-container" onClick={() => setExpanded(!expanded)}>
          <img src={cross} alt="Cross" id="cross" />
        </div>
      </div>

      <div id="expand-nav">
        <a href="/" className="expand-nav-item">
          <sup className={focus == "home" ? "focus" : ""}>01</sup>
          <span className={focus == "home" ? "focus underline" : ""}>Home</span>
        </a>
        <a href="/about" className="expand-nav-item">
          <sup className={focus == "about" ? "focus" : ""}>02</sup>
          <span className={focus == "about" ? "focus underline" : ""}>
            About
          </span>
        </a>
        <a href="/events" className="expand-nav-item">
          <sup className={focus == "events" ? "focus" : ""}>03</sup>
          <span className={focus == "events" ? "focus underline" : ""}>
            Events
          </span>
        </a>
        <a href="/teams" className="expand-nav-item">
          <sup className={focus == "teams" ? "focus" : ""}>04</sup>
          <span className={focus == "teams" ? "focus underline" : ""}>
            Teams
          </span>
        </a>
        <a href="/login" className="expand-nav-item">
          <sup className={focus == "login" ? "focus" : ""}>05</sup>
          <span className={focus == "login" ? "focus underline" : ""}>
            Login
          </span>
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