import { useState } from "react";

function Counter({ counterHeading }) {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Counter: {count}</h1>
      <h1 className="counterHeading">{counterHeading}</h1>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </>
  );
}

export default Counter;
