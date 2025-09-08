import { forwardRef, useImperativeHandle, useRef } from "react";
import { ResultModalProps } from "../types/interfaces";
import { ResultModalHandle } from "../types/types";

function ResultModal(
  { targetTime, remainingTime, onReset }: ResultModalProps,
  ref: React.Ref<ResultModalHandle>
) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  const userLost = remainingTime <= 0;
  const formattedRemainingTime = (remainingTime / 1000).toFixed(2);
  const score = Math.round((1 - remainingTime / (targetTime * 1000)) * 100);

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialogRef.current?.showModal();
      },
    };
  });
  return (
    <dialog ref={dialogRef} className="result-modal">
      {userLost && <h2>You lost!</h2>}
      {!userLost && <h2>Your score: {score}</h2>}
      <p>
        The target time was <strong>{targetTime} seconds.</strong>
      </p>
      <p>
        You stopped the timer with{" "}
        <strong>{formattedRemainingTime} seconds left.</strong>
      </p>
      {/* form with dialog method is specific, it will close the whole dialog on close button click */}
      <form method="dialog" onSubmit={onReset}>
        <button>Close</button>
      </form>
    </dialog>
  );
}

export default forwardRef<ResultModalHandle, ResultModalProps>(ResultModal);
