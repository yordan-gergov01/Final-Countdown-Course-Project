import { useRef, useState } from "react";
import { TimerChallengeProps } from "../types/interfaces";

export default function TimerChallenge({
  title,
  targetTime,
}: TimerChallengeProps) {
  const [timerExpired, setTimerExpired] = useState<boolean>(false);
  const [timerStarted, setTimerStarted] = useState<boolean>(false);
  const timerRef = useRef<number>();

  function handleTimerStart() {
    timerRef.current = setTimeout(() => {
      setTimerExpired(true);
    }, targetTime * 1000);

    setTimerStarted(true);
  }

  function handleTimerStop() {
    clearTimeout(timerRef.current);
  }
  return (
    <section className="challenge">
      <h2>{title}</h2>
      {timerExpired && <p>You lost!</p>}
      <p className="challenge-time">
        {targetTime} second{targetTime > 1 ? "s" : ""}
      </p>
      <p>
        <button onClick={timerStarted ? handleTimerStop : handleTimerStart}>
          {timerStarted ? "Stop" : "Start"} Challenge
        </button>
      </p>
      <p className={timerStarted ? "active" : undefined}>
        {timerStarted ? "Timer is running..." : "Timer inactive"}
      </p>
    </section>
  );
}
