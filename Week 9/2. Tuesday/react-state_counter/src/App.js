import React from "react";
import "./styles.css";
import { useState } from "react";

export default function App() {
  const [count, setcount] = useState(0);

  return (
    <div className="container">
      <h1>{count}</h1>
      <div className="button-container">
        <button
          type="button"
          onClick={() => {
            setcount(count - 1);
          }}>
          -
        </button>
        <button
          type="button"
          onClick={() => {
            setcount(count + 1);
          }}>
          +
        </button>
      </div>
    </div>
  );
}
