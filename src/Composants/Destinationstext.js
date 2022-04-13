import React from 'react'

function Destinationstext({currentPlanet}) {
  return (
    <div className="anim">
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
  );
}

export default Destinationstext