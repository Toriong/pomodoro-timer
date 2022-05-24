import './css/index.css';
import Navbar from './components/navbar/Navbar';
import TimerTypeButtons from './components/TimerTypeButtons';
import TimerContainer from './components/timer/TimerContainer';
import { useState } from 'react';

const PomodoroTimer = () => {
  const [isFocusTimerOn, setIsFocusTimerOn] = useState(true);
  // GOAL: create a state called isOnFocusTimer, pass it to the TimerTypesButtons. Pass the same state to TimerContainer. if true, it will present the timer for the focus timer. If false, it will show the timer for the break 
  return (
    <div className="pomodoroTimerPage">
      <Navbar />
      <TimerTypeButtons setIsFocusTimerOn={setIsFocusTimerOn} />
      <TimerContainer isFocusTimerOn={isFocusTimerOn} />
    </div>
  );
}

export default PomodoroTimer;
