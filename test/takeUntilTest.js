//importing required functions
const assert = require('chai').assert;
const takeUntil = require('../takeUntil');
const eqArrays = require('../eqArrays');
describe('#takeUntil', () => {
  it("returns an array for 0 index values, first test", () => {
    const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
    const results1 = takeUntil(data1, x => x < 0);
   
    assert.strictEqual(eqArrays(results1, [1, 2, 5, 7, 2]), true);
  });
  it("returns an array for 0 index values, first test", () => {
    const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
    const results2 = takeUntil(data2, x => x === ',');
    assert.strictEqual(eqArrays(results2, ["I've", 'been', 'to', 'Hollywood']), true);
  });
});
