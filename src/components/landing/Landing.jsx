/* eslint-disable react/no-unescaped-entities */
import './Landing.css'

import landingVideo from '../../assets/video/landing-page.mp4'

const Landing = () => {

  return (
    <div id="video-container">
      <video autoPlay muted loop>
        <source src={landingVideo} type="video/mp4" />
      </video>
    </div>
  );
}

export default Landing