/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import './Landing.css'

import landingVideo from '../../assets/video/landing-page.mp4'
import { useEffect } from 'react'

const Landing = ({play}) => {

  useEffect(() => {
    if (play) {
      const video = document.getElementById("landing-video");
      if (video != null) video.play();
    }
  })

  return (
    <div id="video-container">
      <video muted loop id='landing-video'>
        <source src={landingVideo} type="video/mp4" />
      </video>
    </div>
  );
}

export default Landing