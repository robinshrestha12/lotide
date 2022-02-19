const assert = require('chai').assert;
const eqObjects = require('../eqObjects');
describe('#eqObjects', () => {
  const cd = { c: "1", d: ["2", 3] };
  const dc = { d: ["2", 3], c: "1" };
  const aa = { c: '1', b: 2 };
  const bb = { b: 2, a: '1' };
  it("returns true for equal Objects", () => { //checking for numbers
    assert.strictEqual(eqObjects(cd, dc), true);
  });
  it("returns false for inequal objects", () => { //checking for strings
    assert.strictEqual(eqObjects(aa, bb), false);
  });
  it("returns false for inequal objects", () => { //checking for strings
    assert.strictEqual(eqObjects(aa, bb), false);
  });
});
