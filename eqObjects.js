const assertEqual = function(actual, expected) {
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

const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {// if lengths are not equal
    return false;
  }
  for (let variables of Object.keys(object1)) {
    if (Array.isArray(object1[variables]) && Array.isArray(object2[variables])) {// if both object items are arrays
      return eqArrays(object1[variables], object2[variables]);
    }
    if (object1[variables] !== object2[variables]) {//if both the object item values are not equal
      return false;
    }
  }
  return true;
};

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
//console.log(eqObjects(cd, dc)); // => true
assertEqual(eqObjects(cd, dc), true);
const cd2 = { c: "1", d: ["2", 3, 4] };
//console.log(eqObjects(cd, cd2));// =>false
assertEqual(eqObjects(cd, cd2), false);
const aa = { c: '1', b: 2 };
const bb = { b: 2, a: '1' };
//console.log(eqObjects(aa, bb));
assertEqual(eqObjects(aa, bb), false);

module.exports = eqObjects;
