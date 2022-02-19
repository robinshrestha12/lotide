//This functions compares to find whether the two given objects are equa.
const eqObjects = require('./eqObjects');
const assertObjectsEqual = function(arrayOne, arrayTwo) {
  const inspect = require('util').inspect;
  if (eqObjects(arrayOne, arrayTwo) === true) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(arrayOne)} === ${inspect(arrayTwo)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(arrayOne)} !== ${inspect(arrayTwo)}`);
  }
};


module.exports = assertObjectsEqual;