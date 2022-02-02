const eqObjects = function (object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
  for (let variables of Object.keys(object1)) {
    if (Array.isArray(object1[variables]) && Array.isArray(object2[variables])) {
      return eqArrays(object1[variables], object2[variables]);
    }
    if (object1[variables] !== object2[variables]) {
      return false;
    }
    else {
      returnValue = true;
    }
  }
  return returnValue;
};
const assertObjectsEqual = function (arrayOne, arrayTwo) {
  const inspect = require('util').inspect;
  if (eqObjects(arrayOne, arrayTwo) === true) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(arrayOne)} === ${inspect(arrayTwo)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(arrayOne)} !== ${inspect(arrayTwo)}`);
  }
}
assertObjectsEqual({ a: '1', b: 2 }, { b: 2, a: '1' });
assertObjectsEqual({ c: '1', b: 2 }, { j: 2, a: '1' });
assertObjectsEqual({ c: '1', b: 2 }, { b: 2, a: '1' });
assertObjectsEqual({ a: '1', b: 2 }, { j: 2, a: '1' });