import React from 'react';
import Valget from '../../assets/valget.jpg';

const ValgetForedrag = () => (
  <div className="foredrag-grid">
    <h1 className="foredrag-title">Valget</h1>
    <div className="foredrag-left-paragraf">
      <p>
        Få har som Søren Kierkegaard til bunds analyseret, hvad det vil sige at
        vælge og at være et vælgende menneske. Og få har som han peget på, at
        mennesket – stående overfor den opgave at skulle være menneske – er
        stedt i den misére at skulle vælge.
      </p>
      <p>
        Foredraget præsenterer hovedtrækkene i de valg, der analyseres i det
        store værk ”Enten-Eller”, nemlig det æstetiske og det etiske valg, der
        dog begge ender i et ultimatum.
      </p>
      <p>sognepræst, dr.theol.</p>
      <p>Anders Kingo</p>
    </div>
    <img
      className="foredrag-right-paragraf foredrag-image"
      src={Valget}
      alt="Valget"
    />
  </div>
);

export default ValgetForedrag;
