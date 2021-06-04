import { useState, useEffect, useRef } from "react";

const Timer = () => {
  const POMODORO_TIMER = 25;
  const BREAK_TIMER = 5;
  const POMODORO = "pomodoro";
  const BREAK = "break";

  const [timerType, setTimerType] = useState(POMODORO);
  const [minute, setMinute] = useState(POMODORO_TIMER);
  const [second, setSecond] = useState(0);
  const [timerIsRunning, setTimerIsRunning] = useState(false);
  const intervalId = useRef(null);

  useEffect(() => {
    if (minute <= 0 && second <= 0) {
      stopTimer();

      if (timerType === POMODORO) {
        setTimerType(BREAK);
        setMinute(BREAK_TIMER);
      } else if (timerType === BREAK) {
        setTimerType(POMODORO);
        setMinute(POMODORO_TIMER);
      }
    }
  }, [minute, second, timerType]);

  useEffect(() => {
    if (timerIsRunning) {
      if (second < 0) {
        setMinute(minute - 1);
        setSecond(59);
      }

      intervalId.current = setInterval(() => {
        setSecond(second - 1);
      }, 1000);
    }

    return () => clearInterval(intervalId.current);
  }, [second, minute, timerIsRunning]);

  const startTimer = () => setTimerIsRunning(true);

  const stopTimer = () => {
    setTimerIsRunning(false);
    clearTimeout(intervalId.current);
  };

  const resetTimer = () => {
    stopTimer();
    setMinute(timerType === POMODORO ? POMODORO_TIMER : BREAK_TIMER);
    setSecond(0);
  };

  return (
    <div>
      <h2 className="text-9xl">
        {minute}:{second < 10 ? `0${second}` : second}
      </h2>
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Pause</button>
      <button onClick={resetTimer}>Reset</button>
    </div>
  );
};

export default Timer;
