import React from "react";
import "./styles.css";

export default function App() {
  return (
    <main>
      <Button>Click Me</Button>
      <Button>Dont Click Me</Button>
      <Button>Cancel</Button>
      <Button>Submit</Button>
    </main>
  );
}

function Button({ children }) {
  return (
    <button className="button" type="button">
      {children}
    </button>
  );
}
