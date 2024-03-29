import React, { useState } from "react";
import Counter from "./components/Counter";
import "./styles.css";

export default function App() {
  const [people, setPeople] = useState(1);

  function addPeople() {
    setPeople(people + 1);
  }

  function substractPeople() {
    setPeople(people - 1);
  }

  return (
    <div className="container">
      <h1>Place a Table Reservation</h1>
      <Counter onAddPeople={addPeople} onSubstractPeople={substractPeople} />
      <p>You are going to reserve a table for {people} people.</p>
    </div>
  );
}
