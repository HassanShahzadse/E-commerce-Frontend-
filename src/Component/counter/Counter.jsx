import React, { useState } from "react";

const Counter = ({ onCountChange, props }) => {
  const [count, setCount] = useState(props ?? 1);
  const increment = () => {
    const newCount = count + 1;
    setCount(newCount);
    onCountChange(newCount);
  };
  const decrement = () => {
    const newCount = count - 1;
    setCount(newCount);
    onCountChange(newCount);
  };
  return (
    <>
      <button onClick={increment}>+</button>
      <h1>{count}</h1>
      <button onClick={decrement}>-</button>
    </>
  );
};

export default Counter;
