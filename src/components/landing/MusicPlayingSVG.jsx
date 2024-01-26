/* eslint-disable react/prop-types */
import './MusicPlayingSVG.css'

const PlayingMusicSVG = ({isPlaying}) => {
  let stroke = "#0F1035"
  if(!isPlaying)
    stroke = "#7FC7D9"

  return (
    <svg
      id="playing-music"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      viewBox="0 0 18 16"
      enableBackground="new 0 0 18 16"
      xmlSpace="preserve"
      style={{ transform: "translate(0px, 0px)" }}
      onClick={() => console.log("hello")}
    >
      <line
        id={isPlaying ? "line1" : ""}
        strokeWidth="2"
        x1="1"
        y1="0"
        x2="1"
        y2="16"
        data-svg-origin="1 16"
        transform="matrix(1,0,0,0.9409,0,11.5456)"
        style={{ transformOrigin: "0px 0px", stroke: stroke }}
      ></line>
      <line
        id={isPlaying ? "line4" : ""}
        strokeWidth="2"
        x1="13"
        y1="0"
        x2="13"
        y2="16"
        data-svg-origin="13 16"
        transform="matrix(1,0,0,0.9409,0,10.5456)"
        style={{ transformOrigin: "0px 0px", stroke: stroke }}
      ></line>
      <line
        id={isPlaying ? "line2" : ""}
        strokeWidth="2"
        x1="5"
        y1="0"
        x2="5"
        y2="16"
        data-svg-origin="5 16"
        transform="matrix(1,0,0,0.9409,0,7.5456)"
        style={{ transformOrigin: "0px 0px", stroke: stroke }}
      ></line>
      <line
        id={isPlaying ? "line5" : ""}
        strokeWidth="2"
        x1="17"
        y1="0"
        x2="17"
        y2="16"
        data-svg-origin="17 16"
        transform="matrix(1,0,0,0.9409,0,13.5456)"
        style={{ transformOrigin: "0px 0px", stroke: stroke }}
      ></line>
      <line
        id={isPlaying ? "line3" : ""}
        strokeWidth="2"
        x1="9"
        y1="0"
        x2="9"
        y2="16"
        data-svg-origin="9 16"
        transform="matrix(1,0,0,0.9409,0,12.5456)"
        style={{ transformOrigin: "0px 0px", stroke: stroke }}
      ></line>
    </svg>
  );
};

export default PlayingMusicSVG;