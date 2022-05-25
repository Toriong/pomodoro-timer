import "./css/index.css";
import Navbar from "./components/navbar/Navbar";
import TimerTypeButtons from "./components/TimerTypeButtons";
import TimerContainer from "./components/timer/TimerContainer";
import { useState } from "react";

const PomodoroTimer = () => {
  const [isFocusTimerOn, setIsFocusTimerOn] = useState(true);
  const _isFocusTimerOn = [isFocusTimerOn, setIsFocusTimerOn];
  // GOAL: create a state called isOnFocusTimer, pass it to the TimerTypesButtons. Pass the same state to TimerContainer. if true, it will present the timer for the focus timer. If false, it will show the timer for the break
  return (
    <div className="pomodoroTimerPage">
      <Navbar />
      <TimerTypeButtons _isFocusTimerOn={_isFocusTimerOn} />
      <TimerContainer _isFocusTimerOn={_isFocusTimerOn} />
    </div>
  );
};

export default PomodoroTimer;
