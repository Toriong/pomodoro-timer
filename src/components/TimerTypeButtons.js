import React from 'react'
import { useState } from 'react';
import '../css/buttonsRelated/timerTypeBtnsAndContainer.css'

const TimerTypeButtons = () => {

    const [isFocusBtnClicked, setIsFocusBtnClicked] = useState(true);

    const handleFocusBtnClick = () => {
        setIsFocusBtnClicked(true);
    };

    const handleBreakBtnClick = () => {
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