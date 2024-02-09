import React from "react";
import "./Teams.css";
const imgUrl = "team-img/";

export default function Card({
  personName,
  personImg,
  githubLink,
  linkedInLink,
}) {
  return (
    <div className="team-card">
      <div className="left">
        <img
          src={`${imgUrl}${personImg}`}
          className="profile-img"
          alt="Name of person"
        />
      </div>
      <div className="right">
        <div className="name-box">
          <h4>{personName}</h4>
        </div>
        <div className="social-link-box">
          <a href={linkedInLink} target="_blank">
            <img src="../team-linkedin.svg" alt="LinkedIn" />
          </a>
          <a href={githubLink} target="_blank">
            <img src="../team-github.svg" alt="Github" />
          </a>
        </div>
      </div>
    </div>
  );
}
