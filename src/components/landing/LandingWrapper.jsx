import './LandingWrapper.css'

import NavbarWrapper from '../navbar/NavbarWrapper';
import Landing from "../landing/Landing";

const LandingWrapper = () => {
  return (
    <div id="landing-wrapper">
      <div id="nav-wrapper">
        <NavbarWrapper />
      </div>
      <div id="landing">
        <Landing />
      </div>
    </div>
  );
}

export default LandingWrapper