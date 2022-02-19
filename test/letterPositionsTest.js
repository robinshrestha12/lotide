const assert = require('chai').assert;
const letterPositions = require('../letterPositions');
const eqArrays = require('../eqArrays');
describe('#letterPositions', () => {
  it("Index of 'e' in 'hello' give 1.", () => { //testing for different keys
    assert.strictEqual(eqArrays(letterPositions("hello").e, [1]), true);
  });
  it("Index of 'e' in 'lighthouse in the house' gives [9, 16, 22].", () => { //testing for different keys
    assert.strictEqual(eqArrays(letterPositions("lighthouse in the house").e, [9, 16, 22]), true);
  });
});
