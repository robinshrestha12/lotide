const assert = require('chai').assert;
const flatten = require('../flatten');
const eqArrays = require('../eqArrays');
describe('#flatten', () => {
  it("A nested array gives an array by this function", () => { //testing for different keys
    assert.strictEqual(eqArrays(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]), true);
  });
});
