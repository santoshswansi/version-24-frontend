/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import './Landing.css'

const Landing = () => {

  return (
    <div id="video-container">
      <video autoPlay muted loop id='landing-video'>
        <source src="landing-page.mp4" type="video/mp4" />
      </video>
    </div>
  );
}

export default Landing