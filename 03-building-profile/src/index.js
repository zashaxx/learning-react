import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const skills = [
  {
    skill: "React",
    level: "Intermediate",
    color: "#61DBFB",
  },
  {
    skill: "JavaScript",
    level: "Advanced",
    color: "#fff200ff",
  },
  {
    skill: "HTML + CSS",
    level: "Advanced",
    color: "#E34C26",
  },
  {
    skill: "Node JS",
    level: "Beginner",
    color: "#68A063",
  },
  {
    skill: "MongoDB",
    level: "Beginner",
    color: "#4DB33D",
  },
];

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Name />
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img className="avatar" src="/userimage.png" alt="User Avatar" />;
}

function Name() {
  return <h1 className="name">Aayush Koirala</h1>;
}

function Intro() {
  return (
    <div>
      <p className="intro">
        Hi! I'm Aayush, a passionate web developer with a knack for creating
        dynamic and responsive web applications. I love exploring new
        technologies and continuously improving my skills.
      </p>
      <h1 className="name">Skills</h1>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skillset">
      {skills.map((skill) => (
        <Skill skill={skill.skill} color={skill.color} level={skill.level} />
      ))}
    </div>
  );
}

function Skill({ skill, color, level }) {
  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <span> {skill} </span>
      <span>
        {" "}
        {level === "Beginner" && "🐣"}
        {level === "Intermediate" && "🐥"}
        {level === "Advanced" && "🦅"}
      </span>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
