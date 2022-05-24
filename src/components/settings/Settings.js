import React from 'react'
import { useContext } from 'react';
import { BiCheckbox } from "react-icons/bi";
import '../../css/settings/settings.css'
import { SettingsContext } from '../../providers/SettingsProvider';
import SettingsInputs from './SettingsInputs';

const Settings = ({ setIsSettingsOn }) => {


    return (
        <div
            className='settingsMenu'
        >
            <header>
                <h3>Settings</h3>
            </header>
            <section className='inputSection'>
                <form>
                    <SettingsInputs setIsSettingsOn={setIsSettingsOn} />
                </form>
            </section>
        </div>
    )
}

export default Settings