import logo from './logo.svg';
import './css/index.css';
import Navbar from './components/navbar/Navbar';
import TimerTypeButtons from './components/TimerTypeButtons';

const PomodoroTimer = () => {
  return (
    <div className="pomodoroTimerPage">
      <Navbar />
      <TimerTypeButtons />
    </div>
  );
}

export default PomodoroTimer;
