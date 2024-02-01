/* eslint-disable react/prop-types */
import "./HomePage.css";

import NavbarWrapper from "../../components/navbar/NavbarWrapper";
import Landing from "../../components/landing/Landing";

const Home = ({play}) => {
  return (
    <div id="landing-wrapper">
      <div id="nav-wrapper">
        <NavbarWrapper focus={"home"} overlay={true}/>
      </div>
      <div id="landing">
        <Landing play={play} />
      </div>
    </div>
  );
};

export default Home;