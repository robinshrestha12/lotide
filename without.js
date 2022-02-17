const assertArraysEqual = function(arrayOne, arrayTwo) {
  if (eqArrays(arrayOne, arrayTwo) === true) {
    console.log(`✅✅✅ Assertion Passed: ${arrayOne} === ${arrayTwo}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${arrayOne} !== ${arrayTwo}`);
  }
};
const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    console.log("false");
    return false;
  } else {
    for (let i = 0; i < array2.length; i++) {
      if (typeof array1[i] !== typeof array2[i]) {
        return false;
      } else {
        if (array1[i] !== array2[i]) {
          return false;
        }
      }
    }
  }
  return true;
};
const without = function(srArray, rmvArray) {
  let finalArray = srArray;
  if (srArray.length !== 0 && rmvArray.length !== 0) { //if strings are not empty
    for (let i = 0; i < srArray.length; i++) { //Iterating through the first array
      for (let j = 0; j < rmvArray.length; j++) { //iterating through second array

        if (typeof srArray[i] === typeof rmvArray[j]) { //if types are equal
          if (srArray[i] === rmvArray[j]) { //if values are equal
            finalArray.splice(i, 1); //getting rid of the number
            return finalArray;
          }
        }
      }
    }
  }
  return finalArray;
};
console.log(without([1, 2, 3], [1])); // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"]));// => ["1", "2"]
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]);
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

module.exports = without;