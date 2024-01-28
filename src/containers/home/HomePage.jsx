import "./HomePage.css";

import NavbarWrapper from "../../components/navbar/NavbarWrapper";
import Landing from "../../components/landing/Landing";

const Home = () => {
  return (
    <div id="landing-wrapper">
      <div id="nav-wrapper">
        <NavbarWrapper focus={"home"} overlay={true}/>
      </div>
      <div id="landing">
        <Landing />
      </div>
    </div>
  );
};

export default Home;