import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Name />
        <Intro />
        <Skillset />
      </div>
    </div>
  );
}

function Avatar() {
  return (
    <img
      className="avatar"
      src="https://i.pravatar.cc/150?img=3"
      alt="User Avatar"
    />
  );
}

function Name() {
  return <h1 className="name">Aayush Koirala</h1>;
}

function Intro() {
  return (
    <p className="intro">
      Hi! I'm Aayush, a passionate web developer with a knack for creating
      dynamic and responsive web applications. I love exploring new technologies
      and continuously improving my skills.
    </p>
  );
}

function Skillset() {
  return (
    <ul className="skillset">
      <li>JavaScript</li>
      <li>React</li>
      <li>Node.js</li>
      <li>CSS</li>
    </ul>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
