import { useState } from "react";

export function DateCounter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  const date = new Date();
  date.setDate(date.getDate() + count);

  return (
    <div className="date-counter">
      <p>Date Counter</p>
      <div>
        <button onClick={() => setStep(step - 5)}>-5</button>
        <span> Step: {step}</span>
        <button onClick={() => setStep(step + 5)}>+5</button>
      </div>

      <div>
        <button onClick={() => setCount(count - step)}>-{step}</button>
        <span> Count: {count}</span>
        <button onClick={() => setCount(count + step)}>+{step}</button>
      </div>
      <p>
        <span>
          {count === 0
            ? "Today is "
            : count > 0
              ? `${count} days from today is: `
              : `${Math.abs(count)} days from today was: `}
        </span>
        <span>{date.toDateString()}</span>
      </p>
    </div>
  );
}
