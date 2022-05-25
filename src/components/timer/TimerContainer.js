import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useLayoutEffect } from 'react'
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
    const [didTimerStart, setDidTimerStart] = useState(false);
    const [isTimerPaused, setIsTimerPaused] = useState(false);
    const _countDownTime = isFocusTimerOn ? focusTime : breakTime;
    const [countDownTime, setCountDownTime] = useState(_countDownTime);
    const [currentTime, setCurrentTime] = useState(0);
    const [didFirstRenderOccur, setDidFirstRenderOccur] = useState(false);

    useEffect(() => {
        const _focusTime = localStorage.getItem('focusTime');
        if (_focusTime && isFocusTimerOn) {
            var __focusTime = JSON.parse(localStorage.getItem('focusTime'));
        }
        __focusTime && setCountDownTime(__focusTime)
    }, []);

    useEffect(() => {
        console.log('hello there meng')
        if (!didFirstRenderOccur) {
            setDidFirstRenderOccur(true);
        } else {
            console.log('do not execute me')
            const _countDownTime = isFocusTimerOn ? focusTime : breakTime
            setCountDownTime(_countDownTime);
        }
    }, [focusTime, breakTime, isFocusTimerOn]);

    useEffect(() => {
        console.log('countDownTime: ', countDownTime)
    })

    const handleStartBtnClick = () => { setDidTimerStart(true); };
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
    // if the val is zero, then store the original value into focusTime or setBreakTime
    // if the val is not zero, then pass num into setFocusTime or setBreakTime, this will show the changes onto the UI
    // check if answer is zero or not
    // store the difference into setCurrentTime
    // minus 1000 (one second)
    // for every second do the following above:
    // execute setInterval for every a second
    // make a copy of the target timer
    // get the target timer (either focusTime or breakTime)
    // within the consequent of didTimerStart do the following above:
    // execute the setInterval within the useEffect
    // set didTimerStart to true
    // the user presses the start button


    // BRAIN DUMP NOTES:
    // CASE 1: the user presses the reset button, change the time to the original num for the target timer

    // CASE 2: the user presses the pause button, get the current time that the user is on and display onto the DOM
    // BRAIN DUMP NOTES:
    // for the starting time, insert it into a single state. This state (call it countDownTime) will be the state that will be displayed onto the DOM

    // STEPS:
    // GOAL: the current time that the user is on is still being displayed onto the DOM 
    // 


    useEffect(() => {
        if (didTimerStart) {
            let time = isFocusTimerOn ? JSON.parse(JSON.stringify(focusTime)) : JSON.parse(JSON.stringify(breakTime));
            const interval = setInterval(() => {
                time = time - 1000;
                setCurrentTime(time);
                if (time === 0) {
                    setCountDownTime(_countDownTime);
                    setDidTimerStart(false);
                    alert("Time is up. Good job!");
                    clearInterval(interval);
                } else {
                    setCountDownTime(time);
                }
            }, 1000);
        }
    }, [didTimerStart]);





    return (
        <div className='timerContainer'>
            <Timer countDownTime={countDownTime} />
            <section>
                {!didTimerStart ?
                    <button onClick={handleStartBtnClick}>Start</button>
                    :
                    <>
                        <button id='pauseAndResumeBtn'>{isTimerPaused ? "Resume" : "Pause"}</button>
                        <button id='resetBtn'>Reset</button>
                    </>
                }
            </section>
        </div>
    )
}

export default TimerContainer