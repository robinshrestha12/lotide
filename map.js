let words = ["ground", "control", "to", "major", "tom"];
const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item)); // calling callback and pushing the callback function returned item.
  }
  return results;
};

const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
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
const assertArraysEqual = function(arrayOne, arrayTwo) { //assertArraysEqual functions
  if (eqArrays(arrayOne, arrayTwo) === true) {
    console.log(`✅✅✅ Assertion Passed: ${arrayOne} === ${arrayTwo}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${arrayOne} !== ${arrayTwo}`);
  }
};

assertArraysEqual(map(words, word => word[0]), ['g', 'c', 't', 'm', 't']);
words = ["tiger", "horse", "dog", "cat", "deer"];
assertArraysEqual(map(words, word => word[0]), ['t', 'h', 'd', 'c', 'd']);
words = ["Ottawa", "Toronto", "Montreal", "Regina", "Calgary"];
assertArraysEqual(map(words, word => word[0]), ['O', 'T', 'M', 'R', 'C']);

module.exports = map;