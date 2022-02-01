function eqArrays(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  else {
    for (let i = 0; i < array2.length; i++) {
      if (typeof array1[i] !== typeof array2[i]) {
        return false;
      }
      else {
        if (array1[i] !== array2[i]) {
          return false;
        }
      }
    }
  }
  return true;
}
const assertArraysEqual = function (arrayOne, arrayTwo) {
  if (eqArrays(arrayOne, arrayTwo) === true) {
    console.log(`✅✅✅ Assertion Passed: ${arrayOne} === ${arrayTwo}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${arrayOne} !== ${arrayTwo}`);
  }
}
assertArraysEqual([1, 2, 3], [1, 2, 3], true);
assertArraysEqual([1, 2, 3], [3, 2, 1]);
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]);
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]);
