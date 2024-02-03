/* eslint-disable react/no-unescaped-entities */
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
      <div id="footer">
        <h3>Version '24</h3>
        <div id="socials">
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
      </div>
    </>
  );
}

export default Footer