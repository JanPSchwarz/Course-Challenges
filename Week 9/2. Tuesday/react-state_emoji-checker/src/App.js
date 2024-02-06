import React from "react";
import "./styles.css";
import { useState } from "react";

export default function App() {
  const [code, setCode] = useState("?");

  const [validCode, setValidCode] = useState("");

  function handleClick(event) {
    setCode(event.target.textContent);
    setValidCode(event.target.textContent);
    console.log(event.target.textContent);
  }

  return (
    <div className="container">
      <div className="button-container">
        <button type="button" onClick={handleClick}>
          <span role="img" aria-label="Pufferfish">
            🐡
          </span>
        </button>
        <button type="button" onClick={handleClick}>
          <span role="img" aria-label="Whale">
            🐋
          </span>
        </button>
        <button type="button" onClick={handleClick}>
          <span role="img" aria-label="Clownfish">
            🐠
          </span>
        </button>{" "}
      </div>

      <button
        type="button"
        onClick={() => {
          setCode("?");
          console.log("Wähle einen Fisch");
        }}>
        Reset
      </button>

      {code === validCode && <p>Valid code!</p>}
    </div>
  );
}
