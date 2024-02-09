/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import './Footer.css'

import instagram from "../../assets/svg/instagram.svg"
import youtube from "../../assets/svg/youtube.svg"
import linkedin from "../../assets/svg/linkedin.svg"

const Footer = () => {

  return (
    <>
      <div id="footer">
        <h3>Version '24</h3>
        <div id="socials">
          <a
            href="https://www.instagram.com/version_nit_trichy/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={instagram} />
          </a>
          <a
            href="https://www.linkedin.com/in/version-mca-nitt-4b2384221/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={linkedin} />
          </a>
          <a
            href="https://www.youtube.com/version_nit_trichy"
            target="_blank"
            rel="noreferrer"
          >
            <img src={youtube} />
          </a>
        </div>
      </div>
    </>
  );
}

export default Footer