//middle test
const assert = require('chai').assert;
const middle = require('../middle');

describe('#middle.js', () => {
  it("returns [2] for '[1, 2, 3]' ", () => { //checking for odd lengthed array
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });
  it("returns [3] for [1, 2, 3, 4, 5]", () => { //checking for odd lengthed array
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
  });
  it(" returns [3, 4] for [1, 2, 3, 4, 5, 6] ", () => { //checking for even lengthed array
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
  });
  it("returns undefined when array is undefined", () => { //checking undefined
    assert.deepEqual(middle([]), []);
  });
  it("returns empty when array length is 2", () => { //checking for 2 items array
    assert.deepEqual(middle([2, 3]), []);
  });
});


