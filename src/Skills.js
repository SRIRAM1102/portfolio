import "./skills.css";
import bootstrap from "./images/skill/bootstrap-4.png";
import css from "./images/skill/css.png";
import html from "./images/skill/html5.png";
import react from "./images/skill/react.png";
import express from "./images/skill/expressjs.png";
import javascript from "./images/skill/javascript.png";
import mysql from "./images/skill/mqsql.png";
import mongodb from "./images/skill/mongodb.png";
import node from "./images/skill/node.png";

export function Skills() {
  return (
    <div id="skills">
      <h2>Tech Stack</h2>
      <h4>
      These are the few Technologies , languages and frameworks that i grind on a regular basis..
      </h4>
      <div className="skillcontainer">
        <div className="skillinfos">
          <img src={html} alt="Html" className="abtlogo" /> <h4> HTML</h4>
        </div>
        <div className="skillinfos">
          <img src={css} alt="gmail" className="abtlogo" />
          <h4> CSS</h4>
        </div>
        <div className="skillinfos">
          <img src={bootstrap} alt="phone" className="abtlogo" />
          <h4> BOOTSTRAP</h4>
        </div>
        <div className="skillinfos">
          <img src={react} alt="location" className="abtlogo" /> <h4> REACT</h4>
        </div>
        <div className="skillinfos">
          <img src={javascript} alt="language" className="abtlogo" />
          <h4>JAVASCRIPT</h4>
        </div>
        <div className="skillinfos">
          <img src={node} alt="language" className="abtlogo" /> <h4>NODEJS </h4>
        </div>
        <div className="skillinfos">
          <img src={express} alt="language" className="abtlogo express" />
          <h4> EXPRESSJS</h4>
        </div>
        <div className="skillinfos">
          <img src={mysql} alt="language" className="abtlogo" /> <h4> MYSQL</h4>
        </div>
        <div className="skillinfos">
          <img src={mongodb} alt="language" className="abtlogo" />
          <h4> MONGODB</h4>
        </div>
      </div>
    
    </div>
  );
}
