import React from 'react';
import Sanselighed from './projects/sanselighed';
import Herrnhuterna from './projects/herrnhuterne';
import Terapi from './projects/terapi';

const Projekter = (props: any) => {
  const { id } = props.match.params;
  return (
    <React.Fragment>
      {id === 'sanselighed' && <Sanselighed />}
      {id === 'herrnhuterne' && <Herrnhuterna />}
      {id === 'terapi' && <Terapi />}
    </React.Fragment>
  );
};

export default Projekter;
