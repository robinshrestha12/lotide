//middle test
const assert = require('chai').assert;
const middle = require('../middle');

describe('#middle.js', () => {
  it("returns [2] for '[1, 2, 3]' ", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });
  it("returns [3] for [1, 2, 3, 4, 5]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
  });
  it(" returns [3, 4] for [1, 2, 3, 4, 5, 6] ", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
  });
  it("returns undefined when array is undefined", () => {
    assert.deepEqual(middle([]), []);
  });
});
// console.log(middle([1, 2, 3]));// => [2]
// console.log(middle([1, 2, 3, 4, 5])); // => [3]
// console.log(middle([1, 2, 3, 4])); // => [2, 3]
// console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]


