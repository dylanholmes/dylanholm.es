import { transform as _transform } from 'buble';
import assign from 'core-js/features/object/assign';
import { TransformOptions } from 'stream';

export const _poly = { assign };

interface TranspileOptions extends TransformOptions {
  transforms?: any[]  // TODO: update to whatever type this should be
}

export default (code: string, transpileOptions: TranspileOptions = {}) => {
  const opts = {
    ...transpileOptions,
    objectAssign: '_poly.assign',
    transforms: {
      dangerousForOf: true,
      dangerousTaggedTemplateString: true,
      ...transpileOptions.transforms
    }
  };

  return _transform(code, opts).code;
};
