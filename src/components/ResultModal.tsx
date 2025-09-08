import { forwardRef, useImperativeHandle, useRef } from "react";
import { ResultModalProps } from "../types/interfaces";
import { ResultModalHandle } from "../types/types";

function ResultModal(
  { result, targetTime }: ResultModalProps,
  ref: React.Ref<ResultModalHandle>
) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialogRef.current?.showModal();
      },
    };
  });
  return (
    <dialog ref={dialogRef} className="result-modal">
      <h2>You {result}</h2>
      <p>
        The target time was <strong>{targetTime} seconds.</strong>
      </p>
      <p>
        You stopped the timer with <strong>X seconds left.</strong>
      </p>
      {/* form with dialog method is specific, it will close the whole dialog on close button click */}
      <form method="dialog">
        <button>Close</button>
      </form>
    </dialog>
  );
}

export default forwardRef<ResultModalHandle, ResultModalProps>(ResultModal);
