
import "./LandingOverlay.css";

import { useContext } from "react";
import { RootContext } from "../../context/RootContext";


import MusicPlayingSVG from "./MusicPlayingSVG";
import geniusynth from "../../assets/svg/geniusynth.svg";

const LandingOverlay = () => {
  const { isPlaying, setIsPlaying } = useContext(RootContext);

  return (
    <div id="landing-content">
      <img src={geniusynth} alt="geniusynth" />
      <MusicPlayingSVG isPlaying={isPlaying} setIsPlaying={setIsPlaying}/>
    </div>
  );
};

export default LandingOverlay;
