import { useState, useRef, useEffect } from "react";

import "./LandingOverlay.css";

import MusicPlayingSVG from "./MusicPlayingSVG";
import welcomeAudio from "../../assets/audio/welcome-audio.mp3";
import geniusynth from "../../assets/svg/geniusynth.svg";

const LandingOverlay = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const welcomeAudioRef = useRef();

  useEffect(() => {
     if (!isPlaying) {
       welcomeAudioRef.current.pause();
     } else {
       welcomeAudioRef.current.play();
     }
  }, [isPlaying])

  return (
    <div id="landing-content">
      <img src={geniusynth} alt="geniusynth" />
      <div
        id="playing-music-svg-container"
        onClick={() => {
          setIsPlaying(!isPlaying);
        }}
        className={isPlaying ? "" : "black-bg"}
      >
        <MusicPlayingSVG isPlaying={isPlaying} />
      </div>
      <audio loop src={welcomeAudio} ref={welcomeAudioRef} />
    </div>
  );
};

export default LandingOverlay;
