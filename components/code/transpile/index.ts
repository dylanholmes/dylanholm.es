import transform from './transform';
import evalCode from './evalCode';

export const generateFunction = (
  { code = '', scope = {}, exports = [], transpileOptions },
  errorCallback
) => {
  // NOTE: Remove trailing semicolon to get an actual expression.
  const codeTrimmed = code.trim().replace(/;$/, '');

  // NOTE: Workaround for classes and arrow functions.
  const transformed = transform(
    `"use strict";
     ${code};
     return { ${exports.join(',')} };`,
    transpileOptions
  ).trim();

  return evalCode(transformed, scope);
};

export const renderFunctionAsync = (
  { code = '', scope = {}, transpileOptions },
  resultCallback,
  errorCallback
  // eslint-disable-next-line consistent-return
) => {
  const render = func => {
    if (typeof func === 'undefined') {
      errorCallback(new SyntaxError('`render` must be called with valid JSX.'));
    } else {
      resultCallback(func, errorCallback);
    }
  };

  if (!/render\s*\(/.test(code)) {
    return errorCallback(
      new SyntaxError('No-Inline evaluations must call `render`.')
    );
  }

  evalCode(transform(code, transpileOptions), { ...scope, render });
};
