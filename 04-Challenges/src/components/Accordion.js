import { useState } from "react";
import React from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

export const faqs = [
  {
    title: "Arrowhead functions",
    text: "Arrowhead functions provide a concise syntax to write function expressions in JavaScript.",
  },
  {
    title: "About component",
    text: "A reusable piece of code that represents part of a user interface",
  },
  {
    title: "About JSX?",
    text: "A syntax extension that looks similar to HTML and is used with React to describe UI structure",
  },
  {
    title: "About props",
    text: "Short for properties, props are read-only components that must be kept pure",
  },
  {
    title: "About state in React",
    text: "An object that represents the parts of the app that can change",
  },
  {
    title: "About the virtual DOM",
    text: "A lightweight copy of the actual DOM that React uses to optimize updates",
  },
];

export default function Accordion({ data }) {
  return (
    <>
      <div className="acc-head-box">
        <h3 className="acc-header-title"> React FAQs </h3>
      </div>

      <div className="accordion">
        {data.map((el, i) => (
          <AccordionItem
            key={el.title}
            title={el.title}
            text={el.text}
            num={i + 1}
          />
        ))}
      </div>
    </>
  );
}

function AccordionItem({ num, title, text }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className={`acc-item ${isOpen ? "open" : ""}`}>
        <div className="acc-header" onClick={() => setIsOpen(!isOpen)}>
          <p className="acc-number">{num}</p>
          <h3 className="acc-title">{title}</h3>
          <p className="acc-toggle">
            {isOpen ? <FaChevronUp /> : <FaChevronDown />}
          </p>
        </div>
        <div className="acc-content-box">
          <p className="acc-text">{text}</p>
        </div>
      </div>
    </>
  );
}
