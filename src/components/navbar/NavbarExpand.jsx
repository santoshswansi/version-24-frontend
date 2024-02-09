/* eslint-disable react/prop-types */
import "./NavbarExpand.css";
import {useNavigate} from "react-router-dom"

function NavbarExpand({ expanded, setExpanded, focus }) {
  const navigate = useNavigate();

  return (
    <div id="expand-nav-wrapper" className={expanded ? "on-expand" : ""}>
      <div id="expand-nav-header">
        <img
          src="/version.svg"
          alt="Version logo"
          id="expand-logo"
          onClick={() => navigate("/")}
        />
        <div id="cross-container" onClick={() => setExpanded(!expanded)}>
          <img src="/cross.svg" alt="Cross" id="cross" />
        </div>
      </div>

      <div id="expand-nav">
        <a className="expand-nav-item" onClick={() => navigate("/")}>
          <sup className={focus == "home" ? "focus" : ""}>01</sup>
          <span className={focus == "home" ? "focus underline" : ""}>Home</span>
        </a>
        <a className="expand-nav-item" onClick={() => navigate("/about")}>
          <sup className={focus == "about" ? "focus" : ""}>02</sup>
          <span className={focus == "about" ? "focus underline" : ""}>
            About
          </span>
        </a>
        <a className="expand-nav-item" onClick={() => navigate("/events")}>
          <sup className={focus == "events" ? "focus" : ""}>03</sup>
          <span className={focus == "events" ? "focus underline" : ""}>
            Events
          </span>
        </a>
        <a className="expand-nav-item" onClick={() => navigate("/teams")}>
          <sup className={focus == "teams" ? "focus" : ""}>04</sup>
          <span className={focus == "teams" ? "focus underline" : ""}>
            Teams
          </span>
        </a>
        <a className="expand-nav-item" onClick={() => navigate("/login")}>
          <sup className={focus == "login" ? "focus" : ""}>05</sup>
          <span className={focus == "login" ? "focus underline" : ""}>
            Login
          </span>
        </a>
      </div>
      <div id="connect">
        <div id="contact">
          <a href="mailto:versionmcanitt@gmail.com">
            <img src="/arrow-right.svg" className="arrow" alt="arrow" />
            versionmcanitt@gmail.com
          </a>
          <a href="tel:8116002093">
            <img src="/arrow-right.svg" className="arrow" alt="arrow" />
            8116002093
          </a>
        </div>
        <div id="socials">
          <a
            href="https://www.instagram.com/version_nit_trichy/"
            target="_blank"
            rel="noreferrer"
          >
            <img src="/arrow-right.svg" className="arrow" alt="arrow" />
            INSTAGRAM
          </a>
          <a
            href="https://www.linkedin.com/in/version-mca-nitt-4b2384221/"
            target="_blank"
            rel="noreferrer"
          >
            <img src="/arrow-right.svg" className="arrow" alt="arrow" />
            LINKEDIN
          </a>
          <a
            href="https://www.youtube.com/version_nit_trichy"
            target="_blank"
            rel="noreferrer"
          >
            <img src="/arrow-right.svg" className="arrow" alt="arrow" />
            YOUTUBE
          </a>
        </div>
      </div>
    </div>
  );
}

export default NavbarExpand;