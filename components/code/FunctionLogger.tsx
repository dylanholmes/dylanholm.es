import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import FunctionContext from './FunctionContext';

function FunctionLogger({ Component, ...rest }) {
  const context = useContext(FunctionContext);

  Object.entries(context.exports)
    .forEach(([key, value]) => {
      try {
        console.log(key, value);
        if (typeof value === 'function') {
          console.log(`${key}(): `, value());
        }
      } catch (e) {
        console.log("Failed to log export");
      }
    });

  return <Component></Component>;
}

FunctionLogger.propTypes = {
  Component: PropTypes.node
};

FunctionLogger.defaultProps = {
  Component: 'div'
};

export default FunctionLogger;
