import

function Navbar({ pomodoroMinutes, setPomodoroMinutes, shortBreakMinutes, setShortBreakMinutes, longBreakMinutes, setLongBreakMinutes }) {
    return (
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
    );
}
