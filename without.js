const assertArraysEqual = function (arrayOne, arrayTwo) {
  if (eqArrays(arrayOne, arrayTwo) === true) {
    console.log(`✅✅✅ Assertion Passed: ${arrayOne} === ${arrayTwo}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${arrayOne} !== ${arrayTwo}`);
  }
}
function eqArrays(array1, array2) {
  if (array1.length !== array2.length) {
    console.log("false");
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
const without = function (srArray, rmvArray) {
  let finalArray = srArray;
  if (srArray.length !== 0 && rmvArray.length !== 0) {
    for (let i = 0; i < srArray.length; i++) {
      for (let j = 0; j < rmvArray.length; j++) {

        if (typeof srArray[i] === typeof rmvArray[j]) {
          if (srArray[i] === rmvArray[j]) {
            finalArray.splice(i, 1);
            return finalArray;
          }
        }
      }
    }
  }
  return finalArray;
};
console.log(without([1, 2, 3], [1])) // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"]));// => ["1", "2"]
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

module.exports = without;