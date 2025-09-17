import { useEffect, useState, useRef } from "react";
import "./Clock.css";

let STARTING_MINUTES = 1;
const START_TIME = 60 * 1000 * STARTING_MINUTES;

function Clock() {
    const [time, setTime] = useState(START_TIME);
    const [isRunning, setIsRunning] = useState(true);
    const referenceTime = useRef(Date.now());
    const intervalRef = useRef(null);

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
    }, []);

    let seconds = Math.floor((time % (1000 * 60)) / 1000);
    let minutes = Math.floor(time / (1000 * 60));

    return (
        <div className="clock-body">
            <div className="time-display">
                <h1>
                    {minutes.toString().padStart(2, "0")}:{seconds.toString().padStart(2, "0")}
                </h1>
            </div>
        </div>
    );
}

export { Clock };
