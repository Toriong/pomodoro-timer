import React from 'react'
import { useContext } from 'react'
import { SettingsContext } from '../../providers/SettingsProvider'

const Timer = ({ isFocusTimerOn }) => {
    const { _focusTime, _breakTime } = useContext(SettingsContext)
    const [focusTime, setFocusTime] = _focusTime;
    const [breakTime, setBreakTime] = _breakTime;


    const convertMillisToMinutesAndSeconds = millis => {
        const minutes = Math.floor(millis / 60_000);
        const seconds = ((millis % 60_000) / 1000).toFixed(0);
        return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
    }

    const timer = isFocusTimerOn ? convertMillisToMinutesAndSeconds(focusTime) : convertMillisToMinutesAndSeconds(breakTime)



    // GOAL: user can go from break time timer to focus time timer

    // convert miliseconds to minutes and seconds

    // GOAL: 
    // present the timer onto the UI 
    return (
        <div>
            <section>
                <span>{timer}</span>
            </section>
        </div>
    )
}

export default Timer