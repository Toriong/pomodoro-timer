import React from 'react'
import { useContext } from 'react';
import { BiCheckbox } from "react-icons/bi";
import '../../css/settings/settings.css'
import { SettingsContext } from '../../providers/SettingsProvider';
import SettingsInputs from './SettingsInputs';

const Settings = ({ setIsSettingsOn, didTimerStart }) => {


    return (
        <div
            className='settingsMenu'
        >
            <header>
                <h3>Settings</h3>
            </header>
            <section className='inputSection'>
                {didTimerStart ?
                    <span>Timer is running. Stop timer to edit settings.</span>

                    :
                    <form>
                        <SettingsInputs setIsSettingsOn={setIsSettingsOn} />
                    </form>
                }

            </section>
        </div>
    )
}

export default Settings