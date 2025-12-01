import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 💰💸",
];

const questions = [
  {
    id: 1234,
    question: "What is React?",
    answer: "A front-end JavaScript library for building user interfaces",
  },
  {
    id: 4567,
    question: "What is a component?",
    answer: "A reusable piece of code that represents part of a user interface",
  },
  {
    id: 8910,
    question: "What is JSX?",
    answer:
      "A syntax extension that looks similar to HTML and is used with React to describe UI structure",
  },
  {
    id: 1112,
    question: "What are props?",
    answer:
      "Short for properties, props are read-only components that must be kept pure",
  },
  {
    id: 1314,
    question: "What is state in React?",
    answer: "An object that represents the parts of the app that can change",
  },
  {
    id: 1516,
    question: "What is the virtual DOM?",
    answer:
      "A lightweight copy of the actual DOM that React uses to optimize updates",
  },
];
export default function App() {
  return (
    <div className="app-container">
      <Steps />
      <div className="date-counter-wrapper">
        <DateCounter />
      </div>
      <Flashcards />
      <div className="date-counter-wrapper">
        <DateCounterV2 />
      </div>
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

function Flashcards() {
  const [selectedId, setSelectedId] = useState(null);

  function handleClick(id) {
    setSelectedId(id !== selectedId ? id : null);
  }

  return (
    <>
      <h2 className="flashcards-title">React Flashcards</h2>
      <div className="flashcards">
        {questions.map((question) => (
          <div
            key={question.id}
            onClick={() => handleClick(question.id)}
            className={question.id === selectedId ? "flashcard-selected" : ""}
          >
            <p>
              {question.id === selectedId ? question.answer : question.question}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}

function DateCounterV2() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  const date = new Date();
  date.setDate(date.getDate() + count);

  function handleReset() {
    setCount(0);
    setStep(1);
  }

  return (
    <div className="date-counter">
      <p>Date Counter - V2</p>

      <input
        type="range"
        min="1"
        max="20"
        value={step}
        onChange={(e) => setStep(Number(e.target.value))}
      />

      <div>
        <span> Step: {step}</span>
      </div>

      <div>
        <button onClick={() => setCount((c) => c - step)}>-{step}</button>
        <input
          type="text"
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
        />
        <button onClick={() => setCount((c) => c + step)}>+{step}</button>
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
      {count !== 0 || step !== 1 ? (
        <div>
          <button onClick={handleReset}>Reset</button>
        </div>
      ) : null}
    </div>
  );
}
