import React from "react";
import { Link } from "react-router-dom";


function Home() {
  return (
    <section id="hero">
      <div className="content">
        <div className="text">
          <h2>Vous voulez voyager dans</h2>
          <h1>L'ESPACE</h1>
          <p>
            Avouons-le : Si vous voulez aller dans l'espace, autant aller
            véritablement dans l'espace extra-atmosphérique et ne pas planer en
            quelque sorte au bord de celui-ci. Eh bien, asseyez-vous et
            détendez-vous car nous vous ferons vivre une expérience vraiment
            hors du commun !
          </p>
        </div>
        <Link className="hero-btn" to='/'>EXPLORER</Link>
      </div>
    </section>
  );
}

export default Home;
