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
      src="/userimage.png"
      alt="User Avatar"
    />
  );
}

function Name() {
  return <h1 className="name">Aayush Koirala</h1>;
}

function Intro() {
  return (<div>
    <p className="intro">
      Hi! I'm Aayush, a passionate web developer with a knack for creating
      dynamic and responsive web applications. I love exploring new technologies
      and continuously improving my skills.
    </p>
    <h1 className="name">Skills</h1>
  </div>
  );
}

function Skillset() {
return(
<div className="skillset"> 
<Skill skill ='react' emoji ='⚛️' color ='#0ea3d1ff' />
<Skill skill ='javascript' emoji ='💪' color ='yellow' />
<Skill skill ='HTML + CSS' emoji ='❤️' color ='#ff0000ff'/>
<Skill skill ='Node JS' emoji ='🌳' color ='#27ff06fc' /> 
<Skill skill ='MongoDB' emoji ='📀' color ='#adffdeff'/>
</div>
)

}

function Skill(props){
  return(
<div className="skill" style={{backgroundColor:props.color}} > 
  <span> {props.skill} </span>
  <span> {props.emoji} </span>

</div>
  )

}


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
