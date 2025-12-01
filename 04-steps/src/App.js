import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 💰💸",
];

export default function App() {
  return (
    <div>
      <Steps />
      <DateCounter />
    </div>
  );
}

function Steps() {
  function handlePrevious() {
    if (step > 1) setStep((s) => s - 1);
  }

  function handleNext() {
    if (step < 3) setStep((s) => s + 1);
  }
  const [step, setStep] = useState(1);

  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      <button className="close" onClick={() => setIsOpen((is) => !isOpen)}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>

          <p className="message">
            Step {step}: {messages[step - 1]}{" "}
          </p>
          <div className="buttons">
            <button className="prev" onClick={handlePrevious}>
              Previous
            </button>
            <button className="next" onClick={handleNext}>
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
}

function DateCounter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  const date = new Date();
  date.setDate(date.getDate() + count);

  return (
    <div className="date-counter">
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
