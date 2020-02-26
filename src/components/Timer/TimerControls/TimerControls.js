import React from "react";

import Button from "../../UI/Button/Button";

import "./TimerControls.css";

const TimerControls = props => {
  return (
    <div>
      <h1>{props.timerState ? "Timer started" : "Press start to begin"}</h1>
      <div className="TimerControls">
        <Button
          disabled={props.timerState}
          btnType="Start"
          clicked={props.startTimer}
        >
          START
        </Button>
        <Button btnType="Pause" clicked={props.pauseTimer}>
          PAUSE
        </Button>
        <Button btnType="Reset" clicked={props.resetTimer}>
          RESET
        </Button>
      </div>
    </div>
  );
};

export default TimerControls;
