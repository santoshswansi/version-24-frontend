/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import "./Cover.css"
import gensynthLogo from "../../assets/svg/logo.svg"

const Cover = ({isPageLoading, setIsCoverOn, setIsPlaying}) => {

  return (
    <div id="cover-container">
      <div id="loader-content">
        <div id="loader-logo">
          {isPageLoading ? (
            <div id="loader">
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </div>
          ) : (
            <img id="gensynth-logo" src={gensynthLogo} alt="gensynth-logo" />
          )}
        </div>
        <h3>Version '24</h3>
        <p>An all India meet for MCA</p>
        <div
          id="enter-button"
          className={isPageLoading ? "hide" : ""}
          onClick={() => {
            setIsCoverOn(false);
            setIsPlaying(true);
          }}
        >
          Enter
        </div>
      </div>
      <p
        id="enter-without-audio"
        className={isPageLoading ? "hide" : ""}
        onClick={() => {
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