import { Clock } from "../components/Clock.jsx";
import { Navbar } from "../components/Navbar.jsx";
import { useState } from "react";
import "../styles/MainPage.css";

function MainPage() {
    const [pomodoroMinutes, setPomodoroMinutes] = useState(30);
    const [shortBreakMinutes, setShortBreakMinutes] = useState(5);
    const [longBreakMinutes, setLongBreakMinutes] = useState(15);
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
        <>
            <Navbar
                pomodoroMinutes={pomodoroMinutes}
                longBreakMinutes={longBreakMinutes}
                shortBreakMinutes={shortBreakMinutes}
                setPomodoroMinutes={setPomodoroMinutes}
                setShortBreakMinutes={setShortBreakMinutes}
                setLongBreakMinutes={setLongBreakMinutes}
            ></Navbar>
            <div className={`main-container ${clockTypes.theme}`}>
                <div id="clock-types-btn">
                    <button id="pomodoro-btn" onClick={switchToPomodoro}>
                        Pomodoro
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
        </>
    );
}

export { MainPage };
