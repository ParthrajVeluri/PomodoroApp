import { useEffect, useState, useRef } from "react";
import "../styles/Clock.css";

let STARTING_MINUTES = 30;
const START_TIME = 60 * 1000 * STARTING_MINUTES;

function Clock() {
    const [time, setTime] = useState(START_TIME);
    const [isRunning, setIsRunning] = useState(false);
    const [theme, setTheme] = useState("green");
    const referenceTime = useRef(Date.now());
    const intervalRef = useRef(null);

    //Timer countdown logic
    useEffect(() => {
        if (isRunning) {
            intervalRef.current = setInterval(() => {
                const now = Date.now();
                const elapsed = now - referenceTime.current;
                referenceTime.current = now;
                setTime((prevTime) => {
                    const newTime = Math.max(prevTime - elapsed, 0);
                    if (newTime === 0) {
                        setIsRunning(false);
                        clearInterval(intervalRef.current);
                    }
                    return newTime;
                });
            }, 100);
        } else {
            clearInterval(intervalRef.current);
        }
        return () => clearInterval(intervalRef.current);
    }, [isRunning]);

    //Theme switch logic
    useEffect(() => {
        document.documentElement.className = theme;
    }, [theme]);

    //Cycling Defined Themes
    const cycleTheme = () => {
        if (theme === "green") setTheme("pink");
        else if (theme === "pink") setTheme("green");
    };

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
        <div style={{ justifyContent: "center", display: "flex", flexDirection: "column" }}>
            <div className="clock-body">
                <div className="time-display">
                    <h1>
                        {minutes.toString().padStart(2, "0")}:{seconds.toString().padStart(2, "0")}
                    </h1>
                </div>
                <div className="timer-button">
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
            <button id="theme-button" onClick={cycleTheme}>
                Change Theme
            </button>
        </div>
    );
}

export { Clock };
