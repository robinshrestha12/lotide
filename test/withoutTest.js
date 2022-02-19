//importing required functions
const assert = require('chai').assert;
const without = require('../without');
const eqArrays = require('../eqArrays');
describe('#without', () => {
  it("returns [2, 3] when passed ([1, 2, 3], [1])", () => {
    assert.strictEqual(eqArrays(without([1, 2, 3], [1]), [2, 3]), true);
  });
  it("returns ['1', '2'] when passed  (['1', '2', '3'], [1, 2, '3'])", () => {
    assert.strictEqual(eqArrays(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]), true);
  });
  it("returns ['hello', 'world'] when passed (['hello', 'world', 'lighthouse'], ['lighthouse'])", () => {
    assert.strictEqual(eqArrays(without(["hello", "world", "lighthouse"], ["lighthouse"]), ["hello", "world"]), true);
  });
});

