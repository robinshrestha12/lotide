const assert = require('chai').assert;
const eqArrays = require('../eqArrays');
describe('#eqArrays', () => {
  it("returns true for [1, 2, 3] & [1,2,3]", () => { //checking for numbers
    assert.strictEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
  });
  it("returns false for [1, 2, 3] & [3, 2, 1]", () => { //checking for numbers
    assert.strictEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);
  });
  it("returns true for ['1', '2', '3'] & ['1', '2', '3']", () => { //checking for strings
    assert.strictEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
  });
  it("returns false for ['1', '2', '3'] & ['1', '2', 3 ]", () => { //checking for strings
    assert.strictEqual(eqArrays(["1", "2", "3"] , ["1", "2", 3]), false);
  });
  it("returns true for [] & []", () => { //checking for strings
    assert.strictEqual(eqArrays([], []), true);
  });

});
