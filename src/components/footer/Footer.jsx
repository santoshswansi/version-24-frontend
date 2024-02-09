/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import './Footer.css'

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
            <img src="/instagram.svg" />
          </a>
          <a
            href="https://www.linkedin.com/in/version-mca-nitt-4b2384221/"
            target="_blank"
            rel="noreferrer"
          >
            <img src="/linkedin.svg" />
          </a>
          <a
            href="https://www.youtube.com/version_nit_trichy"
            target="_blank"
            rel="noreferrer"
          >
            <img src="/youtube.svg" />
          </a>
        </div>
      </div>
    </>
  );
}

export default Footer