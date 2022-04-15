import React, { useEffect, useState } from "react";
import Lune from "../images/destination/image-moon.png";
import { destinations } from "../data";

function Destinations() {
  const [active, setActive] = useState("Lune");
  const [currentPlanet, setCurrentPlanet] = useState([]);
  const [changed, setchanged] = useState(false);
  const [planetImage, setplanetImage] = useState('')

  useEffect(() => {
    let current = destinations.find((item) => item.name === active);
    setCurrentPlanet(current);
  }, [active]);

  useEffect(() => {
    if(currentPlanet.images){
      setplanetImage(currentPlanet.images.png);
    }
    setTimeout(() => {
      setchanged(true);
    }, 5);
    return setchanged(false);
  }, [currentPlanet]);

  return (
    <section id="destinations">
      <div className="container">
        <h2>
          <span>01</span>
          CHOISISSEZ VOTRE DESTINATION
        </h2>
        <div className="content">
          <img src={Lune} alt="planete" className={changed ? "image-anim" : null} />
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
            <div className={changed ? "anim" : null}>
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
