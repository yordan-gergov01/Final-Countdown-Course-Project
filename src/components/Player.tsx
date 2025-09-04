import { useRef, useState } from "react";

export default function Player() {
  const [userName, setUserName] = useState<string | null>(null);
  const playerName = useRef<HTMLInputElement>(null);

  function handleClick() {
    if (playerName.current) {
      setUserName(playerName.current?.value);
    }
  }

  return (
    <section id="player">
      <h2>Welcome {userName ?? "unknown entity"}</h2>
      <p>
        <input ref={playerName} type="text" />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
