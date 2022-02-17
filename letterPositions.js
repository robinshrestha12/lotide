const eqArrays = function(array1, array2) {//eqArrays function
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
const assertArraysEqual = function(arrayOne, arrayTwo) { //assertarraysequal function
  if (eqArrays(arrayOne, arrayTwo) === true) {
    console.log(`✅✅✅ Assertion Passed: ${arrayOne} === ${arrayTwo}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${arrayOne} !== ${arrayTwo}`);
  }
};
const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) { //iterating through the sentence
    if (sentence[i] === " ") {
      continue;
    }
    if (results[sentence[i]]) { //if already present push as another index item.
      results[sentence[i]].push(i);
    } else {
      results[sentence[i]] = [i];
    }
  }
  return results;
};
console.log(letterPositions("lighthouse in the house"));
assertArraysEqual(letterPositions("hello").e, [1]);
assertArraysEqual(letterPositions("lighthouse in the house").e, [9, 16, 22]);

module.exports = letterPositions;