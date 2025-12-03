import { useState } from "react";
import { messages } from "./App.js";

export function Steps() {
  function handlePrevious() {
    if (step > 1) setStep((s) => s - 1);
  }

  function handleNext() {
    if (step < 3) setStep((s) => s + 1);
  }
  const [step, setStep] = useState(1);

  const [isOpen, setIsOpen] = useState(true);

  function Button({ className, onClick, children }) {
    return (
      <button className={className} onClick={onClick}>
        {children}
      </button>
    );
  }
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

          <StepMessage step={step}>{messages[step - 1]}</StepMessage>
          <div className="buttons">
            <Button onClick={() => alert(`learn how to ${messages[step - 1]}`)}>
              Click me
            </Button>
          </div>

          <div className="buttons">
            <Button className="prev" onClick={handlePrevious}>
              <span>👈</span> Previous
            </Button>
            <Button className="next" onClick={handleNext}>
              {" "}
              Next <span>👉</span>
            </Button>
          </div>
        </div>
      )}
    </>
  );

  function StepMessage({ step, children }) {
    return (
      <div className="message">
        <h3>Step {step}</h3>
        {children}
      </div>
    );
  }
}
