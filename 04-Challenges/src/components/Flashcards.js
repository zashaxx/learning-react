import { useState } from "react";
import { questions } from "./App";

export function Flashcards() {
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
