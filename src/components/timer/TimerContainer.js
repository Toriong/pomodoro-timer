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


const bell = new Audio('http://soundbible.com/mp3/Store_Door_Chime-Mike_Koenig-570742973.mp3');


const TimerContainer = ({ _isFocusTimerOn, _didTimerStart }) => {
  const { _focusTime, _breakTime, _isAlarmOn } = useContext(SettingsContext);
  const [focusTime, setFocusTime] = _focusTime;
  const [breakTime, setBreakTime] = _breakTime;
  const [isAlarmOn, setIsAlarmOn] = _isAlarmOn;
  const [didTimerStart, setDidTimerStart] = _didTimerStart;
  const [isTimerPaused, setIsTimerPaused] = useState(false);
  const [isFocusTimerOn, setIsFocusTimerOn] = _isFocusTimerOn;
  const __focusTime = localStorage.getItem("focusTime")
    ? JSON.parse(localStorage.getItem("focusTime"))
    : focusTime;
  const __breakTime = localStorage.getItem("breakTime")
    ? JSON.parse(localStorage.getItem("breakTime"))
    : _breakTime;
  // const __isAlarmOn = localStorage.getItem('isAlarmOn') ? JSON.parse(localStorage.getItem('isAlarmOn')) : isAlarmOn;
  const _countDownTime = isFocusTimerOn ? __focusTime : __breakTime;
  const [countDownTime, setCountDownTime] = useState(_countDownTime);
  const [currentTime, setCurrentTime] = useState(_countDownTime);
  const [didFirstRenderOccur, setDidFirstRenderOccur] = useState(false);
  const [willResumePausedCount, setWillResumePausedCount] = useState(false);
  const [intervalTimer, setIntervalTimer] = useState(null);

  //  BUG: when the

  useEffect(() => {
    if (!didFirstRenderOccur) {
      setDidFirstRenderOccur(true);
    } else {
      const __focusTime = localStorage.getItem("focusTime")
        ? JSON.parse(localStorage.getItem("focusTime"))
        : focusTime;
      const __breakTime = localStorage.getItem("breakTime")
        ? JSON.parse(localStorage.getItem("breakTime"))
        : breakTime;
      const isAlarmOn = localStorage.getItem("isAlarmOn")
        ? JSON.parse(localStorage.getItem("isAlarmOn"))
        : isAlarmOn;
      const _countDownTime = isFocusTimerOn ? __focusTime : __breakTime;
      console.log("_countDownTime: ", _countDownTime);
      if (didTimerStart) {
        clearInterval(intervalTimer);
        setDidTimerStart(false);
        isTimerPaused && setIsTimerPaused(false);
      };
      setIsAlarmOn(isAlarmOn);
      setCountDownTime(_countDownTime);
      setCurrentTime(_countDownTime);
    }
  }, [isFocusTimerOn, breakTime, focusTime, isAlarmOn]);

  const handleStartBtnClick = () => {
    setDidTimerStart(true);
  };

  const handlePauseBtnClick = () => {
    clearInterval(intervalTimer);
    setIsTimerPaused(true);
  };

  const [resumeCountToggled, setResumeCountToggled] = useState(false);

  useEffect(() => {
    if (didTimerStart) {
      console.log("willResumePausedCount: ", willResumePausedCount);
      console.log("currentTime: ", currentTime);
      let time = willResumePausedCount
        ? JSON.parse(JSON.stringify(currentTime))
        : JSON.parse(JSON.stringify(_countDownTime));
      let interval = setInterval(() => {
        time = time - 1000;
        setCurrentTime(time);
        setCountDownTime(time);
        if (time === -1000 || time < 0) {
          const message = isFocusTimerOn
            ? "Focus time is up. Good job, take a break!"
            : "Break time is up. Let's get back to work!";
          isAlarmOn && bell.play();
          alert(message);
          setCountDownTime(_countDownTime);
          setCurrentTime(_countDownTime);
          clearInterval(interval);
          setIsFocusTimerOn((isFocusTimerOn) => !isFocusTimerOn);
          setDidTimerStart(false);
          willResumePausedCount && setWillResumePausedCount(false);
        }
      }, 1000);
      setIntervalTimer(interval);
    }
  }, [didTimerStart, resumeCountToggled]);

  const handleResumeBtnClick = () => {
    setResumeCountToggled((resumeCountToggled) => !resumeCountToggled);
    setIsTimerPaused(false);
    setWillResumePausedCount(true);
  };

  const handleResetBtnClick = () => {
    // GOAL: when the user presses the reset button, do the following on the UI:
    // store the default value for the targeted timer (pass the default value for setFocusTimer if on focus timer, if user on break timer, then pass the default timer for the setBreakTimer)
    // store false into didTimerStart
    // stop the timer from executing
    // the user presses the reset button
    clearInterval(intervalTimer);
    setDidTimerStart(false);
    setCountDownTime(_countDownTime);
    isTimerPaused && setIsTimerPaused(false);
  };

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
            <button
              id="pauseAndResumeBtn"
              onClick={() => {
                isTimerPaused ? handleResumeBtnClick() : handlePauseBtnClick();
              }}
            >
              {isTimerPaused ? "Resume" : "Pause"}
            </button>
            <button id="resetBtn" onClick={handleResetBtnClick}>
              Reset
            </button>
          </>
        )}
      </section>
    </div>
  );
};

export default TimerContainer;
