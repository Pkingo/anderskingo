import React from 'react';
import Mennesket from '../../assets/menesket.jpg';

const MennesketForedrag = () => (
  <div className="foredrag-grid">
    <h1 className="foredrag-title">Mennesket er ånd</h1>
    <div className="foredrag-left-paragraf">
      <p>
        Vi lever i en tid, der faktisk udelukkende kan tale psykologisk om det
        at være menneske. I alt, hvad vi foretager os, og i vor selvforståelse
        og forståelse af hinanden gør de psykologiske forklaringsmodeller sig
        gældende.
      </p>
      <p>
        Søren Kierkegaard var en eminent psykolog, men hos ham får den noget
        flade todimensionale psykologiske struktur tilført åndens tredje
        dimension, hvorved den opgave ”at vorde menneske” bliver, hvad han
        kalder et saligt anliggende.
      </p>
      <p>
        Med sætningen ”mennesket er ånd” udtrykker han således ikke et faktum,
        men en opgave, nemlig den at vorde ånd og deri have et åndeligt forhold
        til sig selv, til medmennesket, til tilværelsen.
      </p>
      <p>sognepræst, dr.theol.</p>
      <p>Anders Kingo</p>
    </div>
    <img
      className="foredrag-right-paragraf foredrag-image"
      src={Mennesket}
      alt="Mennesket er ånd"
    />
  </div>
);

export default MennesketForedrag;
