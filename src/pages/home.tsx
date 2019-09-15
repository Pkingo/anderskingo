import React from 'react';

import profileImage from '../assets/profile.jpg';

const Home = () => (
  <div className="grid-2x2">
    <h3>Anders Kingo</h3>
    <p className="home-paragraf">
      Teologisk kandidat fra Aarhus Universitet; sognepræst i Helsingør;
      dr.theol. på afhandlingen Analogiens teologi, Københavns Universitet;
      adskillige artikler om klassisk teologiske emner, men især om Søren
      Kierkegaard, herunder to folkelige bøger: en introduktion til Kierkegaards
      opbyggelige univers (Hosekræmmerens Søn; sammen med Sten-O. B. Vedstesen)
      og en pædagogisk guide til at læse Kierkegaard At være samtidig med sig
      selv.
    </p>
    <img className="home-picture" src={profileImage} alt="Anders Kingo" />
  </div>
);

export default Home;
