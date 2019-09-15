import React from 'react';
import Næstekærlighed from '../../assets/næstekærlighed.jpg';

const ElskeForedrag = () => (
  <div className="foredrag-grid">
    <h1 className="foredrag-title">At elske sin næste</h1>
    <div className="foredrag-left-paragraf">
      <p>
        <i>
          En introduktion til Søren Kierkegaard og hans evangeliske tale om
          kærlighed
        </i>
      </p>
      <p>
        Med udgangspunkt i et lille idéhistorisk overblik vandrer vi langsomt og
        målrettet ind i Søren Kierkegaards forunderlige univers. Målet er at
        danne os et helt enfoldigt og konkret billede af selve grundstrukturen i
        hans filosofiske, teologiske og psykologiske tænkning. Når billedet er
        udfoldet, sætter det os pædagogisk i stand til at forstå dybden i hans
        anliggende og i hans nøglebegreber, denne aften med hovedvægt på hans
        klare tale om kærlighed og næstekærlighed.
      </p>
      <p>sognepræst, dr.theol.</p>
      <p>Anders Kingo</p>
    </div>
    <img
      className="foredrag-right-paragraf"
      src={Næstekærlighed}
      alt="Næstekærlighed"
    />
  </div>
);

export default ElskeForedrag;
