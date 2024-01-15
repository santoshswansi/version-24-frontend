import React from "react";
import { useNavigate } from "react-router";

import VersionLogo from "/version.svg";
import ThemeLogo from "/geniusynth.svg";
import "./About.css";
const About = () => {
  const navigate = useNavigate();
  return (
    <div className="about-container">
      <img
        src={VersionLogo}
        className="version-logo"
        onClick={() => navigate("/")}
      />
      <img src={ThemeLogo} className="theme-logo" />

      <div className="content-container">
        <h1>About Us</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, est.
          Eum iste laudantium quasi distinctio. Consectetur asperiores quidem
          eius a temporibus cumque error molestiae voluptatem quo. Amet delectus
          dignissimos ipsa. Lorem ipsum, dolor sit amet consectetur adipisicing
          elit. Fugiat dolorem distinctio repellendus autem officia, in
          possimus? Labore quisquam, dignissimos repellat debitis, voluptatibus
          quibusdam architecto accusamus molestiae numquam fuga, placeat ut.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
          iusto ad facilis quae pariatur alias libero magni, nostrum facere quod
          rem est deserunt in enim, necessitatibus explicabo et, impedit fuga!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat,
          libero ipsa quidem minima excepturi esse iste! Accusamus accusantium
          neque nihil atque omnis quaerat vitae, rerum maxime facilis veniam
          fuga esse? Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Corrupti, debitis architecto. Asperiores est possimus repellendus
          praesentium consequatur aliquid dignissimos eum voluptatibus deserunt
          omnis. Incidunt, at porro? Culpa aliquam tenetur neque.
        </p>
      </div>
    </div>
  );
};

export default About;
