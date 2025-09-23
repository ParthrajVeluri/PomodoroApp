import { useState } from "react";
import "../styles/Navbar.css";
import gearWheel from "../assets/gearwheel.png";
import points from "../assets/points.webp";

function Navbar({ pomodoroMinutes, setPomodoroMinutes, shortBreakMinutes, setShortBreakMinutes, longBreakMinutes, setLongBreakMinutes }) {
    const [pomodoroPoints, setPomodoroPoints] = useState(0);
    const [displayDropdown, setDisplayDropdown] = useState(false);


    return (
        <nav className={`navbar theme`} >
            <div className="navbar-left">
                <h1 id="logo">Gamify</h1>
            </div>

            <div className="navbar-center">
                <ul className="nav-links">
                    <a href="https://www.google.com/">Home</a>
                    <a href="https://www.google.com/">Rewards</a>
                    <a href="https://www.google.com/">Statistics</a>
                </ul>
            </div>
            <div className="navbar-right">
                <h3>
                    <img className="icon" id="points-icon" src={points}></img>
                    {pomodoroPoints}
                </h3>
                {/*Tab index makes element keyboard focusable which then allows us to use onFocus and onBlur effects */}
                {/*onBlur effect happens anytime you focus (press tab) off the current element */}
                {/*tabIndex={0} onBlur={() => setDisplayDropdown(false)}*/}
                <div className="settings-container" >
                    <img className="icon" id="settings-icon" onClick={() => setDisplayDropdown(!displayDropdown)} alt="Settings" src={gearWheel}></img>
                    {displayDropdown && (
                        <div className="settings-dropdown">
                            <h4>Set Timer Durations (minutes)</h4>
                            <label>
                                Pomodoro:
                                <br></br>
                                <input type="number" min="1" value={pomodoroMinutes} onChange={(e) => setPomodoroMinutes(parseFloat(e.target.value))} />
                            </label>
                            <label>
                                Short Break:
                                <br></br>
                                <input type="number" min="1" value={shortBreakMinutes} onChange={(e) => setShortBreakMinutes(parseFloat(e.target.value))} />
                            </label>
                            <label>
                                Long Break:
                                <br></br>
                                <input type="number" min="1" value={longBreakMinutes} onChange={(e) => setLongBreakMinutes(parseFloat(e.target.value))} />
                            </label>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
}

export { Navbar };
