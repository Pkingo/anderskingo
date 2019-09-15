import React from 'react';

// Foredrag
import ElskeForedrag from './foredrag/elske';
import FolkeligeForedrag from './foredrag/folkelige';
import MennesketForedrag from './foredrag/mennesket';
import CohenForedrag from './foredrag/cohen';
import ValgetForedrag from './foredrag/valget';
import EnhverForedrag from './foredrag/enhver';
import TvivlForedrag from './foredrag/tvivl';
import AbrahamForedrag from './foredrag/abraham';

const Foredrag = (props: any) => {
  const { id } = props.match.params;
  return (
    <React.Fragment>
      {id === 'elske' && <ElskeForedrag />}
      {id === 'folkelige' && <FolkeligeForedrag />}
      {id === 'mennesket' && <MennesketForedrag />}
      {id === 'cohen' && <CohenForedrag />}
      {id === 'valget' && <ValgetForedrag />}
      {id === 'enhver' && <EnhverForedrag />}
      {id === 'tvivl' && <TvivlForedrag />}
      {id === 'abraham' && <AbrahamForedrag />}
    </React.Fragment>
  );
};

export default Foredrag;
