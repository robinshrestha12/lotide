const assert = require('chai').assert;
const findKey = require('../findKey');
describe('#findKey', () => {
  it("returns 'noma' for value 2", () => { //testing
    let input1 = findKey({
      "Blue Hill": { stars: 1 },
      "Akaleri": { stars: 3 },
      "noma": { stars: 2 },
      "elBulli": { stars: 3 },
      "Ora": { stars: 2 },
      "Akelarre": { stars: 3 }
    }, x => x.stars === 2);// => "noma"
    assert.strictEqual(input1, "noma");
  });
  it("returns Akaleri for value 3", () => {
    let input2 = findKey({
      "Blue Hill": { stars: 1 },
      "Akaleri": { stars: 3 },
      "noma": { stars: 2 },
      "elBulli": { stars: 3 },
      "Ora": { stars: 2 },
      "Akelarre": { stars: 3 }
    }, x => x.stars === 3);// => "Akaleri"
    assert.strictEqual(input2, "Akaleri");
  });
  it("returns 'Blue Hill' for value 1", () => {
    let input3 = findKey({
      "Blue Hill": { stars: 1 },
      "Akaleri": { stars: 3 },
      "noma": { stars: 2 },
      "elBulli": { stars: 3 },
      "Ora": { stars: 2 },
      "Akelarre": { stars: 3 }
    }, x => x.stars === 1);// => "Blue Hill"
    assert.strictEqual(input3, "Blue Hill");
  });
});
