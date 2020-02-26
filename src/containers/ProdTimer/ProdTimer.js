import React, { Component } from "react";

import "./ProdTimer.css";

import Timer from "../../components/Timer/Timer";
import TimerControls from "../../components/Timer/TimerControls/TimerControls";

import Audio from "../../assets/sound/Winning-sound-effect.mp3";

class ProdTimer extends Component {
  state = {
    timeInSeconds: 0,
    timeInMinutes: 0,
    secondPerMinute: 0,
    timeIsTicking: false,
    percentDone: "0%"
  };

  resetTimerHandler = () => {
    this.setState({
      timeInSeconds: 0,
      percentDone: "0%",
      timeIsTicking: false,
      timeInMinutes: 0,
      secondPerMinute: 0
    });
  };

  startTimerHandler = () => {
    this.setState({ timeIsTicking: true });

    setTimeout(() => {
      let updatedTime = this.state.timeInSeconds;
      let updateTimeInterval = setInterval(() => {
        if (
          this.state.timeIsTicking !== false &&
          this.state.timeInSeconds < 1500
        ) {
          updatedTime = updatedTime + 1;

          let secondsInMinutes = updatedTime / 60;
          secondsInMinutes = secondsInMinutes % 1;
          secondsInMinutes = Math.round(secondsInMinutes * 60);

          let timeToMinutes = Math.floor(updatedTime / 60);
          if (timeToMinutes === 25) {
            this.finishedPomodoroCycleSound();
            alert(
              "Congratulations! You reached 25 minuetes. Take a five minute break"
            );
          }
          this.calculateTimeInPercent();
          this.setState({
            timeInMinutes: timeToMinutes,
            timeInSeconds: updatedTime,
            secondPerMinute: secondsInMinutes
          });
        } else {
          clearInterval(updateTimeInterval);
        }
      }, 1000);
    }, 10);
  };

  pauseTimerHandler = () => {
    this.setState({ timeIsTicking: false });
  };

  calculateTimeInPercent = () => {
    const totalTime = 1500;
    const currentTime = this.state.timeInSeconds;
    const calculatedTime = (currentTime / totalTime) * 100 + "%";

    this.setState({ percentDone: calculatedTime });
  };

  secondCounter = () => {};

  finishedPomodoroCycleSound = () => {
    this.startTimerHandler();
    let audio = document.getElementById("audio");
    audio.play();

    console.log("Clicked");
  };

  render() {
    return (
      <div className="ProdTimer">
        <Timer
          percentDone={this.state.percentDone}
          time={this.state.timeInMinutes}
          secondCounter={this.state.secondPerMinute}
        ></Timer>
        <TimerControls
          resetTimer={this.resetTimerHandler}
          startTimer={this.finishedPomodoroCycleSound}
          pauseTimer={this.pauseTimerHandler}
          timerState={this.state.timeIsTicking}
        ></TimerControls>
        <audio id="audio" src={Audio}></audio>
      </div>
    );
  }
}

export default ProdTimer;
