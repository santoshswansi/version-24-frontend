import "./LandingOverlay.css";

import gensynth from "../../assets/svg/gensynth.svg";

const LandingOverlay = () => {

  return (
    <div id="landing-content">
      <img src={gensynth} alt="gensynth" />
    </div>
  );
};

export default LandingOverlay;
