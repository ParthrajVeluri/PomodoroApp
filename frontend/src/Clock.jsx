import { useEffect, useState } from "react";
import "./Clock.css";

const STARTING_MINUTES = 2
const START_TIME = 60*1000*STARTING_MINUTES
const INTERVAL_TIME = 100


function Clock() {
    const [time, setTime] = useState(START_TIME)
    const [referenceTime, setReferenceTime] = useState(Date.now())

    useEffect(() => {
        const countDown = () => {
            setTime(prevTime => {
                if (prevTime <= 0) return 0;
                
                const now = Date.now();
                const elapsedTime = now - referenceTime;
                const timeLeft = prevTime-elapsedTime;
                setReferenceTime(now);
                return timeLeft;
            })

            setTimeout(countDown, INTERVAL_TIME);
        }
    }, [time]);

    return (
        <div className="clock-body">
            <div className="time-display">
                <h1>
                    {time/1000}
                </h1>
            </div>
        </div>
    );
}

export { Clock };
