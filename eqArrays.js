const assertEqual = function (actual, expected) {
  if (((typeof (actual) === "number")) && ((typeof (expected) === "number"))) {
    if (actual === expected) {
      console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
    } else {
      console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
    }
  } else {
    if (actual === expected) {
      console.log(`✅✅✅ Assertion Passed: "${actual}" === "${expected}"`);
    } else {
      console.log(`🛑🛑🛑 Assertion Failed: "${actual}" !== "${expected}"`);
    }
  }
};
function eqArrays(array1, array2) {
  if (array1.length !== array2.length) {
    //console.log("false");
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

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS//
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // => should PASS//
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => should PASS//
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); // => should PASS//
assertEqual(eqArrays([], []), true); // => should Fail//
