import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  function handleIncrement() {
    setCount(count + 1);

    // setCount((prevCount) => prevCount + 1);

    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);

    // console.log(count);
  }

  return (
    <div className="counter">k
      <h1>Count: {count}</h1>
      <button
        type="button"
        className="counter__button"
        onClick={handleIncrement}>
        Increment count by 3
      </button>
    </div>
  );
}
