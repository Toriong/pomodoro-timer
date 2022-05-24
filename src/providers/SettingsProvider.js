import React, { useState, createContext } from 'react'


export const SettingsContext = createContext();




export const SettingsProvider = props => {
    const [focusTime, setFocusTime] = useState(1_500_000);
    const [breakTime, setBreakTime] = useState(300_000);
    const [isAlarmOn, setIsAlarmOn] = useState(true);


    return (
        <SettingsContext.Provider
            value={{
                _focusTime: [focusTime, setFocusTime],
                _breakTime: [breakTime, setBreakTime],
                _isAlarmOn: [isAlarmOn, setIsAlarmOn]
            }}
        >
            {props.children}
        </SettingsContext.Provider>
    )
}