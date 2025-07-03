import "./App.css";
import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);
  const date = new Date();
  date.setDate(date.getDate() + count);

  return (
    <div className="App">
      <div className="container">
        <h2 className="slider">
          Step:
          <input
            type="range"
            min="1"
            max="10"
            value={step}
            onChange={(e) => setStep(Number(e.target.value))}
          />
          <p>{step}</p>{" "}
        </h2>
      </div>
      <div className="container">
        <h2>
          <button onClick={() => setCount((s) => s - step)}>-</button>
          <input
            type="number"
            placeholder="Enter day"
            value={!count ? "" : count}
            onChange={(e) => setCount(Number(e.target.value))}
          ></input>
          <button onClick={() => setCount((s) => s + step)}>+</button>
        </h2>
      </div>
      <h1>
        {count >= 1
          ? `${count} days from today is `
          : count === 0 || !count
          ? "Today is "
          : `${Math.abs(count)} days ago is `}
        {date.toDateString()}
      </h1>
      <button
        onClick={() => {
          setCount(0);
          setStep(0);
        }}
      >
        Reset
      </button>
    </div>
  );
}

export default App;
