/* eslint-disable react/prop-types */
import PlayingMusicSVG from '../landing/MusicPlayingSVG'
import './Footer.css'

import { useContext } from "react";
import { RootContext } from "../../context/RootContext";

import instagram from "../../assets/svg/instagram.svg"
import youtube from "../../assets/svg/youtube.svg"
import linkedin from "../../assets/svg/linkedin.svg"

const Footer = () => {

  const { isPlaying, setIsPlaying } = useContext(RootContext);

  return (
    <>
      <div id="playing-music-svg">
        <PlayingMusicSVG isPlaying={isPlaying} setIsPlaying={setIsPlaying} />
      </div>
      <div id="footer-socials">
        <a href="">
          <img src={instagram} />
        </a>
        <a href="">
          <img src={linkedin} />
        </a>
        <a href="">
          <img src={youtube} />
        </a>
      </div>
      <div id="footer-visual-container"></div>
    </>
  );
}

export default Footer