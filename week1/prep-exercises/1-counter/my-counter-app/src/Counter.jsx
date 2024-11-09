import { useState } from "react";
import Count from "./Count";
import Button from "./Button";
import "./App.css";
const Counter = () => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const feedback = count > 10 ? "It's higher than 10!" : "Keep counting...";
  return (
    <div>
      <h2>{feedback}</h2>
      <div className="count-display">Count: {count}</div>
      <Count count={count} />
      <Button onIncrement={incrementCount} />
    </div>
  );
};

export default Counter;
