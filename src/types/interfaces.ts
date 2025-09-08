import { ResultType } from "./types";

export interface TimerChallengeProps {
  title: string;
  targetTime: number;
}

export interface ResultModalProps {
  result: ResultType;
  targetTime: number;
}
