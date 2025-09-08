import { useRef, useState } from "react";

import { TimerChallengeProps } from "../types/interfaces";
import { ResultModalHandle } from "../types/types";

import ResultModal from "./ResultModal";

export default function TimerChallenge({
  title,
  targetTime,
}: TimerChallengeProps) {
  const [timeRemaining, setTimeRemaining] = useState<number>(targetTime * 1000);

  const timerIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;

  const timerRef = useRef<number>();
  const dialogRef = useRef<ResultModalHandle>(null);

  if (timeRemaining <= 0) {
    clearInterval(timerRef.current);
    setTimeRemaining(targetTime * 1000);
    dialogRef.current?.open();
  }

  function handleTimerStart() {
    timerRef.current = setInterval(() => {
      setTimeRemaining((prevTimeRemaining) => prevTimeRemaining - 10);
    }, 10);
  }

  function handleTimerStop() {
    dialogRef.current?.open();
    clearInterval(timerRef.current);
  }
  return (
    <>
      <ResultModal ref={dialogRef} result="lost" targetTime={targetTime} />
      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={timerIsActive ? handleTimerStop : handleTimerStart}>
            {timerIsActive ? "Stop" : "Start"} Challenge
          </button>
        </p>
        <p className={timerIsActive ? "active" : undefined}>
          {timerIsActive ? "Timer is running..." : "Timer inactive"}
        </p>
      </section>
    </>
  );
}
