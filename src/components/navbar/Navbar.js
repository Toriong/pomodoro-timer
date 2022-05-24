import React from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import '../../css/navbar.css'

const Navbar = () => {
    return (
        <div className='unfixed-wrapper'>
            <div className='navbar'>
                <div className='navbarSubContainer'>
                    <section>
                        <h1>Gabe's Pomodoro timer</h1>
                    </section>
                    <section>
                        <button>
                            <GiHamburgerMenu />
                            <span>Settings</span>
                        </button>
                    </section>
                </div>
                <div className='pomodoroTimerSettingContainer'>

                </div>
            </div>
        </div >
    )
}

export default Navbar;