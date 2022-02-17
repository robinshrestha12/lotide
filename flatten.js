const assertArraysEqual = function(arrayOne, arrayTwo) {//assert arrays equal function
  if (eqArrays(arrayOne, arrayTwo) === true) {
    console.log(`✅✅✅ Assertion Passed: ${arrayOne} === ${arrayTwo}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${arrayOne} !== ${arrayTwo}`);
  }
};
const eqArrays = function(array1, array2) { //eqArrays function
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
const flatten = function(arrayCollection) {
  let flattenedArray = [];
  for (let i = 0; i < arrayCollection.length; i++) {//iterating through input array
    if (Array.isArray(arrayCollection[i]) === true) { // if the item of the input array is array
      for (let j = 0; j < arrayCollection[i].length; j++) {
        flattenedArray.push(arrayCollection[i][j]); // pushing the values to new array
      }
    } else {
      flattenedArray.push(arrayCollection[i]);
    }
  }
  return flattenedArray;
};
const arrayValue = flatten([1, 2, [3, 4], 5, [6]]);// => [1, 2, 3, 4, 5, 6]
console.log(arrayValue);
assertArraysEqual(arrayValue, [1, 2, [3, 4], 5, [6]]);

module.exports = flatten;