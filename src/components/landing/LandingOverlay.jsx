
import "./LandingOverlay.css";

import { useContext } from "react";
import { RootContext } from "../../context/RootContext";


import MusicPlayingSVG from "./MusicPlayingSVG";
import gensynth from "../../assets/svg/gensynth.svg";

const LandingOverlay = () => {
  const { isPlaying, setIsPlaying } = useContext(RootContext);

  return (
    <div id="landing-content">
      <img src={gensynth} alt="gensynth" />
      <MusicPlayingSVG isPlaying={isPlaying} setIsPlaying={setIsPlaying}/>
    </div>
  );
};

export default LandingOverlay;
