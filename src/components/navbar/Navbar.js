import React from 'react';
import { useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { AiFillCloseSquare } from "react-icons/ai";
import '../../css/navbar.css'
import Settings from '../settings/Settings';

const Navbar = ({ _didTimerStart }) => {
    const [isSettingsOn, setIsSettingsOn] = useState(false);
    const [didTimerStart, setDidTimerStart] = _didTimerStart;

    const handleSettingsBtnClick = () => { setIsSettingsOn(!isSettingsOn); };

    return (
        <div className='unfixed-wrapper'>
            <div className='navbar'>
                <div className='navbarSubContainer'>
                    <section>
                        <h1>Gabe's Pomodoro Timer</h1>
                    </section>
                    <section>
                        <button onClick={handleSettingsBtnClick}>
                            {isSettingsOn ? <AiFillCloseSquare /> : <GiHamburgerMenu />}
                            <span>Settings</span>
                        </button>
                    </section>
                </div>
                <div className='pomodoroTimerSettingContainer'>
                    {isSettingsOn && <Settings setIsSettingsOn={setIsSettingsOn} didTimerStart={didTimerStart} />}
                </div>
            </div>
        </div>
    )
}

export default Navbar;