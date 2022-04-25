import React, { useEffect, useState } from "react";
import Lune from "../images/destination/image-moon.png";
import { destinations } from "../data";

function Destinations() {
  const [active, setActive] = useState("Lune");
  const [currentPlanet, setCurrentPlanet] = useState([]);

  let planetImages = {
    Lune: require("../images/destination/image-moon.png"),
    Mars: require("../images/destination/image-mars.png"),
    Europe: require("../images/destination/image-europa.png"),
    Titan: require("../images/destination/image-titan.png"),
  };

  useEffect(() => {
    let current = destinations.find((item) => item.name === active);
    setCurrentPlanet(current);
  }, [active]);

  useEffect(() => {
    const image = document.getElementById("image-planete");
    image.classList.remove("image-anim");
    void image.offsetWidth;
    image.classList.add("image-anim");

    const text = document.getElementById("info");
    text.classList.remove("anim");
    void text.offsetWidth;
    text.classList.add("anim");
  }, [currentPlanet]);

  return (
    <section id="destinations">
      <div className="container">
        <h2>
          <span>01</span>
          CHOISISSEZ VOTRE DESTINATION
        </h2>
        <div className="content">
          <img src={planetImages[currentPlanet.name]} alt="planete" id='image-planete'/>
          <div className="text">
            <ul>
              {destinations.map((item, index) => {
                return (
                  <li
                    className={active === item.name ? "active" : null}
                    key={index}
                    onClick={() => {
                      setActive(item.name);
                    }}
                  >
                    {item.name}
                  </li>
                );
              })}
            </ul>
            <div id='info'>
              <h1>{currentPlanet.name}</h1>
              <p className="description">{currentPlanet.description}</p>
              <div className="underline"></div>
              <div className="distances">
                <div className="distances--item">
                  <h3>DISTANCE MOY.</h3>
                  <p>{currentPlanet.distance}</p>
                </div>
                <div className="distances--item">
                  <h3>DURÉE DU TRAJET</h3>
                  <p>{currentPlanet.travel}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Destinations;
