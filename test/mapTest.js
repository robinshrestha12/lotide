const assert = require('chai').assert;
const map = require('../map');
const eqArrays = require('../eqArrays');
describe('#map', () => {
  it("returns an array for 0 index values, first test", () => {
    let words1 = ["ground", "control", "to", "major", "tom"];
    assert.strictEqual(eqArrays(map(words1, word => word[0]), ['g', 'c', 't', 'm', 't']), true);
  });
  it("returns an array for 0 index values, second test", () => {
    let words2 = ["tiger", "horse", "dog", "cat", "deer"];
    assert.strictEqual(eqArrays(map(words2, word => word[0]), ['t', 'h', 'd', 'c', 'd']), true);
  });
  it("returns an array for 0 index values, Capital letter test", () => {
    let words3 = ["Ottawa", "Toronto", "Montreal", "Regina", "Calgary"];
    assert.strictEqual(eqArrays(map(words3, word => word[0]), ['O', 'T', 'M', 'R', 'C']), true);
  });
});
