import React from "react";
import Card from "./Card";
import "./Teams.css";

export default function TeamRow({ title, subTitle, members }) {
  return (
    <section className="team-section">
      <h2>{title}</h2>
      <p>{subTitle}</p>
      <div className="team-cards-box">
        {members.map((row) => (
          <Card {...row} />
        ))}
      </div>
    </section>
  );
}
