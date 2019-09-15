import React from 'react';
import Program from './kulturrejser/program';
import Tilmelding from './kulturrejser/tilmelding';
import Kulturrejse from './kulturrejser/kulturrejser';

const Kulturrejser = (props: any) => {
  const { id } = props.match.params;
  return (
    <React.Fragment>
      {id === 'kulturrejse' && <Kulturrejse />}
      {id === 'program' && <Program />}
      {id === 'tilmelding' && <Tilmelding />}
    </React.Fragment>
  );
};

export default Kulturrejser;
