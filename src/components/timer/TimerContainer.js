import React from 'react'
import { useContext } from 'react'
import '../../css/timer/timerContainer.css'
import { SettingsContext } from '../../providers/SettingsProvider'
import Timer from './Timer'


// CASES:
// the user presses the button to start the timer
// the user presses the button to stop the timer

// GOAL: the user presses the start button to start the timer

const TimerContainer = ({ isFocusTimerOn }) => {
    const { _focusTime, _breakTime } = useContext(SettingsContext)
    const [focusTime, setFocusTime] = _focusTime;
    const [breakTime, setBreakTime] = _breakTime;
    // this comp will hold the following:
    // the timer
    // the buttons that will start the timer and stop the timer

    // GOAL: start the timer when the user presses the start button

    // BRAIN DUMP NOTES:
    // when the presses the start button, for every second, subtract 1000 miliseconds to the val that is stored in focusTime
    // when it reaches zero, alert the user that timer is done and ring the alarm bell


    // GOAL: for every second, subtract 10000 to the current timer that the user is on

    // CASE: the user is on the focus timer
    // alert the user that the timer is done
    // if the val is zero, didTimerStart to false
    // if the val is zero, then store the original value into focusTime
    // if the val is not zero, then pass num into setFocusTime or setBreakTime, this will show the changes onto the UI 
    // check if answer is zero or not
    // minus 1000 (one second)
    // make a copy of the target timer
    // get the target timer (either focusTime or breakTime)
    // for every second do the following above: 
    // execute setInterval for every a second
    // within the consequent of didTimerStart do the following above: 
    // execute the setInterval within the useEffect
    // set didTimerStart to true
    // the user presses the start button 



    return (
        <div className='timerContainer'>
            <Timer isFocusTimerOn={isFocusTimerOn} />
            <section>
                <button>Start</button>
            </section>
        </div>
    )
}

export default TimerContainer