import React from "react";

import "./Timer.css";

const Timer = props => {
  return (
    <div className="Timer">
      <div className="time-eloped" style={{ height: props.percentDone }}></div>
      <h1>
        {props.secondCounter}:{props.time} Minutes
      </h1>
    </div>
  );
};

export default Timer;
