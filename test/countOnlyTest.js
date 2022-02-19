const assert = require('chai').assert;
const countOnly = require('../countOnly');
describe('#countOnly', () => {
  const firstNames = [
    "Karl",
    "Salima",
    "Agouhanna",
    "Fang",
    "Kavith",
    "Jason",
    "Salima",
    "Fang",
    "Joe"
  ];
  
  const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

  it("comparing present value", () => {
    assert.strictEqual(result1["Jason"], 1);
  });
  it("comparing unavailable value", () => {
    assert.strictEqual(result1["Karima"], undefined);
  });
  it("comparing with available true value", () => {
    assert.strictEqual(result1["Fang"], 2);
  });
  it("comparing with unavailable, false value", () => {
    assert.strictEqual(result1["Agouhanna"], undefined);
  });
});

