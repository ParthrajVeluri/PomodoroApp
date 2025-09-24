import { Outlet } from "react-router-dom";
import { Navbar } from "../components/Navbar.jsx";
import { useState } from "react";

function Layout() {
  const [pomodoroMinutes, setPomodoroMinutes] = useState(30);
  const [shortBreakMinutes, setShortBreakMinutes] = useState(5);
  const [longBreakMinutes, setLongBreakMinutes] = useState(15);

  return (
    <>
      <Navbar
        pomodoroMinutes={pomodoroMinutes}
        setPomodoroMinutes={setPomodoroMinutes}
        shortBreakMinutes={shortBreakMinutes}
        setShortBreakMinutes={setShortBreakMinutes}
        longBreakMinutes={longBreakMinutes}
        setLongBreakMinutes={setLongBreakMinutes}
      />
      <Outlet context={{ pomodoroMinutes, shortBreakMinutes, longBreakMinutes }} />
    </>
  );
}

export { Layout };