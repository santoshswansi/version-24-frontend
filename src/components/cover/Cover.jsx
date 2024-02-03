/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import "./Cover.css"
import gensynthLogo from "../../assets/svg/logo.svg"

const Cover = ({setIsCoverOn, setIsPlaying, setPlay}) => {

  return (
    <div id="cover-container">
      <div id="content">
        <div id="logo">
            <img id="gensynth-logo" src={gensynthLogo} alt="gensynth-logo" />
        </div>
        <h3>Version '24</h3>
        <p>An all India meet for MCA</p>
        <div
          id="enter-button"
          onClick={() => {
            setPlay(true)
            setIsCoverOn(false);
            setIsPlaying(true);
          }}
        >
          Enter
        </div>
      </div>
      <p
        id="enter-without-audio"
        onClick={() => {
          setPlay(true)
          setIsCoverOn(false);
          setIsPlaying(false);
        }}
      >
        Enter without audio
      </p>
    </div>
  );
}

export default Cover