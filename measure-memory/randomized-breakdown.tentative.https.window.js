// META: script=/common/get-host-info.sub.js
// META: script=./resources/common.js
// META: timeout=long
'use strict';

function indexOfEmptyEntry(result) {
  return result.breakdown.findIndex(isEmptyBreakdownEntry);
}

assert_true(self.crossOriginIsolated);
promise_test(async testCase => {
  const initial = await performance.measureMemory();
  let observed_different_order = false;
  for (let i = 0; i < 100; ++i) {
    const current = await performance.measureMemory();
    if (indexOfEmptyEntry(initial) != indexOfEmptyEntry(current)) {
      observed_different_order = true;
    }
  }
  // The order of the breakdown entries must be randomized.
  // A conforming implementation may fail the following assert with
  // the probability of 2^100.
  assert_true(observed_different_order);
}, 'Well-formed result of performance.measureMemory.');
