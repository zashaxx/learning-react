import { Steps } from "./Steps";
import { DateCounter } from "./DateCounter";
import { Flashcards } from "./Flashcards";
import { DateCounterV2 } from "./DateCounterV2";
import Accordion from "./Accordion.js";
import { faqs } from "./Accordion.js";


export const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 💰💸",
];
export const questions = [
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
      <Accordion data={faqs} />
    </div>
  );
}
