import React, { useEffect, useState } from "react";
import { crew } from "../data";

function Crew() {
  const [active, setActive] = useState(0);
  const [currentCrew, setcurrentCrew] = useState(crew[0]);
  const [changed, setchanged] = useState(false)

  const crewImages = {
    "Douglas Hurley": require("../images/crew/image-douglas-hurley.png"),
    "Mark Shuttleworth": require("../images/crew/image-mark-shuttleworth.png"),
    "Victor Glover": require("../images/crew/image-victor-glover.png"),
    "Anousheh Ansari": require("../images/crew/image-anousheh-ansari.png"),
  };

  const setActiveCrew = (element) => {
    setActive(parseInt(element.dataset.index));
  };

  useEffect(() => {
    setcurrentCrew(crew[active])
  }, [active])

  useEffect(() => {
    let timer;
    clearTimeout(timer);
    timer = setTimeout(() => {
      setchanged(true);
    }, 10);
    return setchanged(false);
  }, [currentCrew]);

  return (
    <section id="crew">
      <div className="container">
        <div className="content">
          <div className="text">
            <h2>
              <span>02 </span>Notre équipe
            </h2>
            <div className={`info ${changed && "anim"}`}>
              <h2>{currentCrew.role}</h2>
              <h1>{currentCrew.name}</h1>
              <p className="description">{currentCrew.bio}</p>
            </div>
            <ul>
              {crew.map((item, index) => {
                return <li key={index} data-index={index} className={index === active ? "active" : null} onClick={(e) => setActiveCrew(e.target)}></li>;
              })}
            </ul>
          </div>
          <img className={changed && "anim-image"} src={crewImages[currentCrew.name]} alt="membre de l'équipage" />
        </div>
      </div>
    </section>
  );
}

export default Crew;
