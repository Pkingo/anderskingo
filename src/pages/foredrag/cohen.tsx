import React from 'react';
import Cohen from '../../assets/cohen.jpg';

const CohenForedrag = () => (
  <div className="foredrag-grid">
    <h1 className="foredrag-title">Kierkegaard – Cohen – kristendom</h1>
    <div className="foredrag-left-paragraf">
      <p>
        Denne konstellation kan umiddelbart måske overraske. Dog er den sagligt
        begrundet i det faktum, at Søren Kierkegaard og Leonard Cohen som
        bedende mennesker befinder sig det samme ”sted”, i et åndens rum, hvor
        Guds og ikke menneskets vilje råder. Og de lader med deres prosa og
        poesi kristendommens åndelige evangelium udmønte sig i et såre konkret,
        sanseligt og sansbart univers. Hos begge vorder Ånden kød og tager bolig
        iblandt mennesker.
      </p>
      <p>sognepræst, dr.theol.</p>
      <p>Anders Kingo</p>
    </div>
    <img
      className="foredrag-right-paragraf foredrag-image"
      src={Cohen}
      alt="Leonard Cohen"
    />
  </div>
);

export default CohenForedrag;
