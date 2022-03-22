import React from 'react';

const DoublePendulumSimulationContext = React.createContext({
  sim: null,
  setSim: (sim) => { },
});

export default DoublePendulumSimulationContext;