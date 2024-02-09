import "./Teams.css";

import data from "./data.json";
import TeamRow from "./TeamRow";

const Teams = () => {
  console.log(data);
  return (
    <div id="teams-container">
      {data.map((row) => (
        <TeamRow {...row} />
      ))}
    </div>
  );
};

export default Teams;
