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
const flatten = function (arrayCollection) {
  let flattenedArray = [];
  for (let i = 0; i < arrayCollection.length; i++) {
    if (Array.isArray(arrayCollection[i]) === true) {
      for (let j = 0; j < arrayCollection[i].length; j++) {
        flattenedArray.push(arrayCollection[i][j]);
      }
    } else {
      flattenedArray.push(arrayCollection[i]);
    }
  }
  return flattenedArray;
}
const arrayValue = flatten([1, 2, [3, 4], 5, [6]]);// => [1, 2, 3, 4, 5, 6]
console.log(arrayValue);
assertArraysEqual(arrayValue, [1, 2, [3, 4], 5, [6]]);