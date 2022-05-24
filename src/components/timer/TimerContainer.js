import React from 'react'
import '../../css/timer/timerContainer.css'
import Timer from './Timer'


const TimerContainer = ({ isFocusTimerOn }) => {
    // this comp will hold the following:
    // the timer 
    // the buttons that will start the timer and stop the timer 

    // GOAL: present the timer onto the UI 


    return (
        <div className='timerContainer'>
            <Timer isFocusTimerOn={isFocusTimerOn} />
        </div>
    )
}

export default TimerContainer