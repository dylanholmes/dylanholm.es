import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import FunctionContext from './FunctionContext';
import { generateFunction } from './transpile';

function FunctionProvider({
  children,
  code,
  language,
  exports,
  theme,
  disabled,
  scope,
  transformCode,
  transpileOptions,
  noInline = false
}) {
  const [state, setState] = useState({
    error: undefined,
    exports: {}
  });

  function transpile(newCode) {
    // Transpilation arguments
    const input = {
      code: transformCode ? transformCode(newCode) : newCode,
      scope,
      exports,
      transpileOptions
    };

    const errorCallback = error =>
      setState({ error: error.toString(), exports: undefined });

    const renderFunction = exports => {
      if (exports) {
        setState({ error: undefined, exports });
      }
    };

    try {
      // if (noInline) {
      //   setState({ error: undefined, function: null }); // Reset output for async (no inline) evaluation
      //   renderElementAsync(input, renderFunction, errorCallback);
      // } else {
        renderFunction(generateFunction(input, errorCallback));
      // }
    } catch (error) {
      errorCallback(error);
    }
  }

  useEffect(() => {
    transpile(code);
  }, [code, scope, noInline, transformCode, transpileOptions]);

  const onChange = newCode => transpile(newCode);

  const onError = error => setState({ error: error.toString(), exports: {} });

  return (
    <FunctionContext.Provider
      value={{
        ...state,
        code,
        language,
        theme,
        disabled,
        onError,
        onChange
      }}
    >
      {children}
    </FunctionContext.Provider>
  );
}

FunctionProvider.propTypes = {
  children: PropTypes.node,
  code: PropTypes.string,
  disabled: PropTypes.bool,
  exports: PropTypes.array,
  language: PropTypes.string,
  noInline: PropTypes.bool,
  scope: PropTypes.object,
  theme: PropTypes.object,
  transformCode: PropTypes.any,
  transpileOptions: PropTypes.object
};

FunctionProvider.defaultProps = {
  code: '',
  exports: [],
  noInline: false,
  language: 'jsx',
  disabled: false
};

export default FunctionProvider;
