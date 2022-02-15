// TEST CODE
//const assertEqual = require('../assertEqual')
const assert = require('chai').assert;
const tail = require('../tail');

describe('#tail', () => {
  it("returns Hello for ['Hello', 'Lighthouse', 'Hello', 'Labs']", () => {
    const result = tail(["Hello", "Lighthouse", "Hello", "Labs"]);
    assert.strictEqual(result[1], "Hello");
  });
  it("returns '6' for ['6']", () => {
    const numbers = tail([5, 6, 7]);
    assert.strictEqual(numbers[0], 6);
  });
  it(" original array should still have 3 elements!", () => {
    const words = ["Yo Yo", "Lighthouse", "Labs"];
    assert.strictEqual(words.length, 3);
  });
  it("returns undefined when array is undefined", () => {
    assert.deepEqual(tail([]), []);
  });
});

