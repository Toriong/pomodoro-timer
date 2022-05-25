import React from "react";
import { useState } from "react";
import { useLayoutEffect } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { BiCheckbox, BiCheckboxChecked } from "react-icons/bi";
import { SettingsContext } from "../../providers/SettingsProvider";

const SettingsInputs = ({ setIsSettingsOn }) => {
  const { _breakTime, _focusTime, _isAlarmOn } = useContext(SettingsContext);
  const [breakTimeConfirmed, setBreakTimeConfirmed] = _breakTime;
  const [focusTimeConfirmed, setFocusTimeConfirmed] = _focusTime;
  const [isAlarmOnConfirmed, setIsAlarmOnConfirmed] = _isAlarmOn;
  // convert miliSeconds to minutes in order to display minutes onto the UI
  const breakTimeMinutes = breakTimeConfirmed / 60_000;
  const focusTimeMinutes = focusTimeConfirmed / 60_000;
  const [isAlarmOn, setIsAlarmOn] = useState(isAlarmOnConfirmed);
  const [breakTimeMinsNew, setBreakTimeMinsNew] = useState(breakTimeMinutes);
  const [focusTimeMinsNew, setFocusTimeMinsNew] = useState(focusTimeMinutes);
  const [willSaveChanges, setWillSaveChanges] = useState(false);

  const handleFocusTimeOnChange = (event) => {
    setFocusTimeMinsNew(event.target.value);
  };

  const handleBreakTimeOnChange = (event) => {
    setBreakTimeMinsNew(event.target.value);
  };

  const handleIsAlarmOnBtnClick = (event) => {
    event.preventDefault();
    setIsAlarmOn((isAlarmOn) => !isAlarmOn);
  };

  const convertMinutesToMiliSeconds = (mins) => mins * 60_000;

  const handleSaveBtnClick = (event) => {
    event.preventDefault();
    if (breakTimeMinsNew !== breakTimeMinutes) {
      setBreakTimeConfirmed(convertMinutesToMiliSeconds(breakTimeMinsNew));
    }
    if (focusTimeMinsNew !== focusTimeMinutes) {
      setFocusTimeConfirmed(convertMinutesToMiliSeconds(focusTimeMinsNew));
    }
    if (isAlarmOn !== isAlarmOnConfirmed) {
      setIsAlarmOnConfirmed(isAlarmOn);
    }
    setWillSaveChanges(true);
  };

  // the default time is in miliSeconds

  // GOAL: when the user presses the save button, check if there were any changes that occurred

  useEffect(() => {
    if (willSaveChanges) {
      localStorage.setItem("breakTime", JSON.stringify(breakTimeConfirmed));
      localStorage.setItem("focusTime", JSON.stringify(focusTimeConfirmed));
      localStorage.setItem("isAlarmOn", JSON.stringify(isAlarmOn));
      setIsSettingsOn(false);
      setWillSaveChanges(false);
    }
  }, [willSaveChanges]);

  useLayoutEffect(() => {
    const _breakTime = localStorage.getItem("breakTime");
    const _focusTime = localStorage.getItem("focusTime");
    const _isAlarmOn = localStorage.getItem("isAlarmOn");

    if (_isAlarmOn) {
      setIsAlarmOn(JSON.parse(_isAlarmOn));
    }

    if (_breakTime) {
      const __breakTime = JSON.parse(localStorage.getItem("breakTime"));
      const breakTimeMinutes = __breakTime / 60_000;
      setBreakTimeMinsNew(breakTimeMinutes);
    }

    if (_focusTime) {
      const __focusTime = JSON.parse(localStorage.getItem("focusTime"));
      const focusTimeMinutes = __focusTime / 60_000;
      setFocusTimeMinsNew(focusTimeMinutes);
    }
  }, []);

  return (
    <>
      <div>
        <div>
          <label htmlFor="pomodoro">Pomodoro {"(Focus)"}</label>
          <input
            id="pomodoro"
            type="number"
            value={focusTimeMinsNew}
            onChange={(event) => {
              handleFocusTimeOnChange(event);
            }}
          />
        </div>
        <div>
          <label htmlFor="break">Break</label>
          <input
            id="break"
            type="number"
            value={breakTimeMinsNew}
            onChange={(event) => {
              handleBreakTimeOnChange(event);
            }}
          />
        </div>
        <div id="alarmInputContainer">
          <label htmlFor="alarm">Alarm</label>
          <button
            value={isAlarmOn}
            onClick={(event) => {
              handleIsAlarmOnBtnClick(event);
            }}
          >
            {isAlarmOn ? <BiCheckboxChecked /> : <BiCheckbox />}
          </button>
        </div>
      </div>
      <div>
        <button
          onClick={(event) => {
            handleSaveBtnClick(event);
          }}
        >
          Save
        </button>
      </div>
    </>
  );
};

export default SettingsInputs;
