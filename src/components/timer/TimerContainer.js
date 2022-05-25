import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useLayoutEffect } from "react";
import { useContext } from "react";
import "../../css/timer/timerContainer.css";
import { SettingsContext } from "../../providers/SettingsProvider";
import Timer from "./Timer";

// CASES:
// the user presses the button to start the timer
// the user presses the button to stop the timer

// GOAL: the user presses the start button to start the timer

const TimerContainer = ({ _isFocusTimerOn }) => {
  const { _focusTime, _breakTime } = useContext(SettingsContext);
  const [focusTime, setFocusTime] = _focusTime;
  const [breakTime, setBreakTime] = _breakTime;
  const [didTimerStart, setDidTimerStart] = useState(false);
  const [isTimerPaused, setIsTimerPaused] = useState(false);
  const [isFocusTimerOn, setIsFocusTimerOn] = _isFocusTimerOn;
  const _countDownTime = isFocusTimerOn ? focusTime : breakTime;
  const [countDownTime, setCountDownTime] = useState(_countDownTime);
  const [currentTime, setCurrentTime] = useState(_countDownTime);
  const [didFirstRenderOccur, setDidFirstRenderOccur] = useState(false);

  useEffect(() => {
    const _focusTime = localStorage.getItem("focusTime");
    if (_focusTime && isFocusTimerOn) {
      var __focusTime = JSON.parse(localStorage.getItem("focusTime"));
      console.log("__focusTime: ", __focusTime);
    }
    __focusTime && setCountDownTime(__focusTime);
  }, []);

  useEffect(() => {
    console.log("hello there meng");
    if (!didFirstRenderOccur) {
      setDidFirstRenderOccur(true);
    } else {
      console.log("do not execute me");
      const _countDownTime = isFocusTimerOn ? focusTime : breakTime;
      setCountDownTime(_countDownTime);
    }
  }, [focusTime, breakTime, isFocusTimerOn]);

  useEffect(() => {
    console.log("countDownTime: ", countDownTime);
  });

  const handleStartBtnClick = () => {
    setDidTimerStart(true);
  };

  const handlePauseBtnClick = (interval) => {
    //Goal: pause the countdown of the timer when the user presses the pause button
    // the current time is displayed onto the screen
    // if the isTimerPause is true, then show the currentTime on the Timer comp
    // isTimerPaused is set to true
    // the user presses the pause button
    console.log("what is your name?");
    setIsTimerPaused(true);
    setDidTimerStart(false);
    clearInterval(interval);
  };

  useEffect(() => {
    if (didTimerStart) {
      let time = isFocusTimerOn
        ? JSON.parse(JSON.stringify(focusTime))
        : JSON.parse(JSON.stringify(breakTime));
      var interval = setInterval(() => {
        time = time - 1000;

        setCurrentTime(time);
        setCountDownTime(time);
        if (time === -1000) {
          const message = isFocusTimerOn
            ? "Focus time is up. Good job, take a break!"
            : "Break time is up. Let's get back to work!";
          alert(message);
          setCountDownTime(_countDownTime);
          setCurrentTime(_countDownTime);
          clearInterval(interval);
          setIsFocusTimerOn((isFocusTimerOn) => !isFocusTimerOn);
          setDidTimerStart(false);
        }
      }, 1000);
      //   document.addEventListener("click", (event) => {
      //     console.log("currentTime: ", currentTime);
      //     console.log("is time not below 0: ", currentTime !== -1000);
      //     const wasPauseBtnPressed = event.target.id === "pauseAndResumeBtn";
      //     const isTimeBelowZero = currentTime !== -1000;
      //     if (wasPauseBtnPressed && isTimeBelowZero) {
      //       console.log("hello world");
      //       handlePauseBtnClick(interval);
      //     }
      //   });
    } else {
    }
  }, [didTimerStart]);

  return (
    <div className="timerContainer">
      <Timer
        countDownTime={countDownTime}
        currentTimerTime={currentTime}
        isTimerPaused={isTimerPaused}
      />
      <section>
        {!didTimerStart ? (
          <button onClick={handleStartBtnClick}>Start</button>
        ) : (
          <>
            <button id="pauseAndResumeBtn">
              {isTimerPaused ? "Resume" : "Pause"}
            </button>
            <button id="resetBtn">Reset</button>
          </>
        )}
      </section>
    </div>
  );
};

export default TimerContainer;
