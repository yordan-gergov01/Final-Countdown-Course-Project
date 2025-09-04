import { TimerChallengeProps } from "../types/interfaces";

export default function TimerChallenge({
  title,
  targetTime,
}: TimerChallengeProps) {
  return (
    <section className="challenge">
      <h2>{title}</h2>
      <p className="challenge-time">
        {targetTime} second{targetTime > 1 ? "s" : ""}
      </p>
      <p>
        <button>Start Challenge</button>
      </p>
      <p className="">Time is running...</p>
    </section>
  );
}
