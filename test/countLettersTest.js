const assert = require('chai').assert;
const countLetters = require('../countLetters');

describe('#countLetters', () => {
  it("returns object letter keys with repetations for 'module one lighthouse'", () => { //checking for numbers
    let inputValue = countLetters('module one lighthouse');
    let expectedValue = {
      m: 1,
      o: 3,
      d: 1,
      u: 2,
      l: 2,
      e: 3,
      n: 1,
      i: 1,
      g: 1,
      h: 2,
      t: 1,
      s: 1
    };
    assert.strictEqual(inputValue.toString(), expectedValue.toString());
  });
  
});
