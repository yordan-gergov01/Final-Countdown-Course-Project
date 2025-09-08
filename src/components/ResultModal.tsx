import { ResultModalProps } from "../types/interfaces";

function ResultModal({ result, targetTime }: ResultModalProps) {
  return (
    <dialog className="result-modal">
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

export default ResultModal;
