import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }else{
        alert("0 th position")
    }
  };
  return (
    <>
      <h2>Counter</h2>
      Counter :{count}
      <br />
      <button onClick={handleIncrement} style={{ margin: "10px" }}>
        Increment
      </button>
      <button onClick={handleDecrement} disabled={count === 0}>Decrement</button>
    </>
  );
};
export default Counter;
