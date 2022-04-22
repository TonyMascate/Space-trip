import React from "react";
import { crew } from "../data";

function Crew() {
  return (
    <section id="crew">
      <div className="container">
        <div className="content">
          <div className="text">
            <h2>
              <span>02 </span>Notre équipe
            </h2>
            <div className="info">
              <h2>COMMANDER</h2>
              <h1>DOUGLAS HURLEY</h1>
              <p className="description">Douglas Gerald Hurley est un ingénieur américain, ancien pilote du Corps des Marines et ancien astronaute de la NASA. Il s'est lancé dans l'espace pour la troisième fois en tant que commandant de Crew Dragon Demo-2.</p>
            </div>
            <ul>
              {crew.map((item, index) => {
                return <li key={index}></li>;
              })}
            </ul>
          </div>
          <img src={require("../images/crew/image-douglas-hurley.png")} alt="" />
        <h2>
          <span>02 </span>Notre équipe
        </h2>
        <div className="content">
          <div className="text">
            <h2>COMMANDER</h2>
            <h1>DOUGLAS HURLEY</h1>
            <p className="description">Douglas Gerald Hurley est un ingénieur américain, ancien pilote du Corps des Marines et ancien astronaute de la NASA. Il s'est lancé dans l'espace pour la troisième fois en tant que commandant de Crew Dragon Demo-2.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Crew;
