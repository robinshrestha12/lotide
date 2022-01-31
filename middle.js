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
const middle = function (arrayInput) {
  let outputArray = [];
  if (arrayInput.length === 0 || arrayInput.length === 1) {
    console.log(outputArray);
    return outputArray;
  }
  else {
    if (arrayInput.length % 2 === 1) {
      outputArray.push(arrayInput[(arrayInput.length - 1) / 2]);
      console.log(outputArray);
      return outputArray;
    }
    else {
      outputArray.push(arrayInput[((arrayInput.length) / 2) - 1]);
      outputArray.push(arrayInput[((arrayInput.length) / 2)]);
      console.log(outputArray);
      return outputArray;
    }
  }
}
middle([1, 2, 3])// => [2]
middle([1, 2, 3, 4, 5]) // => [3]
middle([1, 2, 3, 4]) // => [2, 3]
middle([1, 2, 3, 4, 5, 6]) // => [3, 4]
assertArraysEqual(middle([1, 2, 3]), [1, 2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [1, 2, 3, 4, 5]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [1, 2, 3, 4, 5, 6]);


