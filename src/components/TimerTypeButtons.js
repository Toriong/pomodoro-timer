import React from 'react'
import { useState } from 'react';
import '../css/timerType/timerTypeBtnsAndContainer.css'

const TimerTypeButtons = ({ setIsFocusTimerOn }) => {

    const [isFocusBtnClicked, setIsFocusBtnClicked] = useState(true);

    const handleFocusBtnClick = () => {
        setIsFocusTimerOn(true);
        setIsFocusBtnClicked(true);
    };

    const handleBreakBtnClick = () => {
        setIsFocusTimerOn(false);
        setIsFocusBtnClicked(false);
    }

    return (
        <div id="timerTypeButtonContainer">
            <button
                onClick={handleFocusBtnClick}
                style={{ backgroundColor: !isFocusBtnClicked && 'var(--backgroundColor)' }}
            >
                FOCUS!
            </button>
            <button
                onClick={handleBreakBtnClick}
                style={{ backgroundColor: isFocusBtnClicked && 'var(--backgroundColor)' }}
            >
                Break
            </button>
        </div>
    )
}

export default TimerTypeButtons