import "./App.css";
import React, { useState, useEffect } from "react";

function App() {
  // const initDate = new Date();

  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);
  // const [date, setDate] = useState(initDate.toDateString());

  // useEffect(() => {
  //   const newDate = new Date();
  //   newDate.setDate(newDate.getDate() + count);
  //   setDate(newDate.toDateString());
  // }, [count]);

  const date = new Date();
  date.setDate(date.getDate() + count);

  return (
    <div className="App">
      <div className="container">
        <h2>
          <button onClick={() => (step > 1 ? setStep((s) => s - 1) : "")}>
            -
          </button>
          Step: {step}
          <button onClick={() => setStep((s) => s + 1)}>+</button>
        </h2>
      </div>
      <div className="container">
        <h2>
          <button onClick={() => setCount((s) => s - step)}>-</button>Count:{" "}
          {count} <button onClick={() => setCount((s) => s + step)}>+</button>
        </h2>
      </div>
      <h1>
        {count >= 1
          ? `${count} days from today is `
          : count === 0
          ? "Today is "
          : `${Math.abs(count)} days ago is `}
        {date.toDateString()}
      </h1>
    </div>
  );
}

export default App;
