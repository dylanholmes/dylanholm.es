import { _poly } from './transform';

const evalCode = (code: string, scope: object) => {
  const scopeKeys = Object.keys(scope);
  const scopeValues = scopeKeys.map(key => scope[key]);
  // eslint-disable-next-line no-new-func
  const res = new Function('_poly', ...scopeKeys, code);
  return res(_poly, ...scopeValues);
};

export default evalCode;
