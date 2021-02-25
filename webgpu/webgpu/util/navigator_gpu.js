/**
 * AUTO-GENERATED - DO NOT EDIT. Source: https://github.com/gpuweb/cts
 **/
import { assert } from '../../common/framework/util/util.js';
let impl = undefined;

export function getGPU() {
  if (impl) {
    return impl;
  }

  assert(
    typeof navigator !== 'undefined' && navigator.gpu !== undefined,
    'No WebGPU implementation found'
  );

  impl = navigator.gpu;
  return impl;
}
