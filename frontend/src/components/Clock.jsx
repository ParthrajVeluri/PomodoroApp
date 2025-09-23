import { useEffect, useState, useRef } from "react";
import "../styles/Clock.css";
import timerEnd from "../assets/timer-end.mp3";

const timerEndSound = new Audio(timerEnd);

function Clock({ startingMinutes = 30, theme }) {
    const START_TIME = 60 * 1000 * startingMinutes;
    const clockTheme = theme;

    const [time, setTime] = useState(START_TIME);
    const [isRunning, setIsRunning] = useState(false);
    const referenceTime = useRef(Date.now());
    const intervalRef = useRef(null);

    useEffect(() => {
        setTime(START_TIME);
        setIsRunning(false);
    }, [startingMinutes]);

    //Timer countdown logic
    //Date.now() is used to prevent drift in time
    useEffect(() => {
        if (isRunning) {
            intervalRef.current = setInterval(() => {
                const now = Date.now();
                const elapsed = now - referenceTime.current;
                referenceTime.current = now;
                setTime((prevTime) => {
                    const newTime = Math.max(prevTime - elapsed, 0);
                    if (newTime === 0) {
                        timerEndSound.play();
                        resetTimer();
                    }
                    return newTime;
                });
            }, 100);
        } else {
            clearInterval(intervalRef.current);
        }
        return () => clearInterval(intervalRef.current);
    }, [isRunning]);

    const startTimer = () => {
        if (!isRunning) {
            referenceTime.current = Date.now();
            setIsRunning(true);
        }
    };

    const stopTimer = () => {
        if (isRunning) setIsRunning(false);
    };

    const resetTimer = () => {
        setIsRunning(false);
        setTime(START_TIME);
        clearInterval(intervalRef.current);
    };

    //Milliseconds --> Minutes, Seconds
    let seconds = Math.floor((time % (1000 * 60)) / 1000);
    let minutes = Math.floor(time / (1000 * 60));

    return (
        <div className={`clock ${clockTheme}`} style={{ justifyContent: "center", display: "flex", flexDirection: "column" }}>
            <div id="clock-body">
                <div id="time-display">
                    <h1>
                        {minutes.toString().padStart(2, "0")}:{seconds.toString().padStart(2, "0")}
                    </h1>
                </div>
                <div id="timer-button">
                    <button id="start-button" onClick={startTimer}>
                        Start
                    </button>
                    <button id="stop-button" onClick={stopTimer}>
                        Stop
                    </button>
                    <button id="reset-button" onClick={resetTimer}>
                        Reset
                    </button>
                </div>
            </div>
        </div>
    );
}

export { Clock };
