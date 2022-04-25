import React, { useEffect, useState } from "react";
import { crew } from "../data";

function Crew() {
  const [active, setActive] = useState(0);
  const [currentCrew, setcurrentCrew] = useState(crew[0]);

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
    const image = document.getElementById("image-member");
    image.classList.remove("anim-image");
    void image.offsetWidth;
    image.classList.add("anim-image");

    const text = document.getElementById("info");
    text.classList.remove("anim");
    void text.offsetWidth;
    text.classList.add("anim");
  }, [currentCrew]);

  return (
    <section id="crew">
      <div className="container">
        <div className="content">
          <div className="text">
            <h2>
              <span>02 </span>Notre équipe
            </h2>
            <div id='info' className='info'>
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
          <img id='image-member' src={crewImages[currentCrew.name]} alt="membre de l'équipage" />
        </div>
      </div>
    </section>
  );
}

export default Crew;
