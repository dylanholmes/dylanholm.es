import React from 'react';

const SimulationContext = React.createContext({
  simulationState: {theta: {a: 0, b: 0}},
  setSimulationState: (simulationState) => { },
});

export default SimulationContext;