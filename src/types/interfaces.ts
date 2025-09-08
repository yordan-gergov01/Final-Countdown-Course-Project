import { RefObject } from "react";
import { ResultType } from "./types";

export interface TimerChallengeProps {
  title: string;
  targetTime: number;
}

export interface ResultModalProps {
  targetTime: number;
  remainingTime: number;
  onReset: () => void;
}
