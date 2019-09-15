import React from 'react';
import Tvivl from '../../assets/tvivl.jpg';

const TvivlForedrag = () => (
  <div className="foredrag-grid">
    <h1 className="foredrag-title">Den frelsende tvivl</h1>
    <div className="foredrag-left-paragraf">
      <p>
        <i>Om troens og tvivlen hos Søren Kierkegaard</i>
      </p>
      <p>
        I vid udstrækning ville Søren Kierkegaard blot sige det samme om kristen
        tro og tvivl som Martin Luther. Dog var han sig bevidst, at han ikke
        blot kunne gentage Luther, fordi tiden i mellemtiden var blevet moderne.
        Moderniteten, som både Kierkegaard og vi er børn af, havde holdt sit
        indtog. Ville han her 3oo år efter Luther sige det samme, måtte han
        siger det på en splinterny måde. Og det gjorde han så.
      </p>
      <p>sognepræst, dr.theol.</p>
      <p>Anders Kingo</p>
    </div>
    <img
      className="foredrag-right-paragraf"
      src={Tvivl}
      alt="Den frelsende tvivl"
    />
  </div>
);

export default TvivlForedrag;
