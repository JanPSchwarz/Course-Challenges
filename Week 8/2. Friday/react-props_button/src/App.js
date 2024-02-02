import React from "react";
import "./styles.css";

export default function App() {
  function handleClick() {
    alert(`You clicked on me!`);
  }

  return (
    <div>
      <Button text="Klick mich!" color="hotpink" Klick={handleClick} disabled={false} />
      <Button text="Click Click!" color="red" Klick={handleClick} disabled />
    </div>
  );
}

function Button({ text, color, Klick, disabled }) {
  return (
    <button
      disabled={disabled}
      onClick={Klick}
      style={{ color: `${color}`, margin: "20px" }}>
      {text}
    </button>
  );
}
