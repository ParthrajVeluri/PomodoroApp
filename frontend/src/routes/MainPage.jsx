import { Clock } from "../components/Clock.jsx";
import { Navbar } from "../components/Navbar.jsx";
import { useOutletContext } from "react-router-dom";
import { useState } from "react";
import "../styles/MainPage.css";

function MainPage() {
    const { pomodoroMinutes, shortBreakMinutes, longBreakMinutes } = useOutletContext();
    const [currentType, setCurrentType] = useState("pomodoro");

    const clockTypes = {
        minutes: {
            pomodoro: pomodoroMinutes,
            "short-break": shortBreakMinutes,
            "long-break": longBreakMinutes,
        }[currentType],
        theme: currentType,
    };

    const switchToPomodoro = () => {
        setCurrentType("pomodoro");
    };

    const switchToShortBreak = () => {
        setCurrentType("short-break");
    };

    const switchToLongBreak = () => {
        setCurrentType("long-break");
    };

    return (
        <main className="main-page">
            <div className={`main-container ${clockTypes.theme}`}>
                <div id="clock-types-btn">
                    <button id="pomodoro-btn" onClick={switchToPomodoro}>
                        Work Time
                    </button>
                    <button id="short-break-btn" onClick={switchToShortBreak}>
                        Short Break
                    </button>
                    <button id="long-break-btn" onClick={switchToLongBreak}>
                        Long Break
                    </button>
                </div>
                <Clock startingMinutes={clockTypes.minutes} theme={clockTypes.theme} />
            </div>
        </main>
    );
}

export { MainPage };
