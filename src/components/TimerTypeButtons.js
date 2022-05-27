import React from "react";
import { useState } from "react";
import "../css/timerType/timerTypeBtnsAndContainer.css";

const TimerTypeButtons = ({ _isFocusTimerOn }) => {
  const [isFocusTimerOn, setIsFocusTimerOn] = _isFocusTimerOn;

  const handleFocusBtnClick = () => {
    setIsFocusTimerOn(true);
  };

  const handleBreakBtnClick = () => {
    // GOAl: if the timer is on for the focus timer, and the usr presses the break button, then present the break button onto the dom, with the value that is stored in the breakTimer displayed 
    // the num value for the break timer is displayed on the screen
    // the timer stops for the focus timer
    // the break button is highlighted 
    // the timer is on 
    // the user presses the break button timer
    setIsFocusTimerOn(false);
  };

  return (
    <div id="timerTypeButtonContainer">
      <button
        disabled={isFocusTimerOn}
        onClick={handleFocusBtnClick}
        style={{ backgroundColor: !isFocusTimerOn && "var(--backgroundColor)" }}
      >
        FOCUS!
      </button>
      <button
        disabled={!isFocusTimerOn}
        onClick={handleBreakBtnClick}
        style={{ backgroundColor: isFocusTimerOn && "var(--backgroundColor)" }}
      >
        Break
      </button>
    </div>
  );
};

export default TimerTypeButtons;
