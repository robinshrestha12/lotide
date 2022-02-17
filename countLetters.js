const assertEqual = function(actual, expected) { // AssertEqual Function
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
const countLetters = function(inputStrings) {
  let outputObject = {}; // defining an object
  for (const str of inputStrings) { //iterating through string
    if (str === " ") {
      continue;
    }
    if (outputObject[str]) { // if string is already present
      outputObject[str] += 1;
    } else {
      outputObject[str] = 1;
    }
  }
  return outputObject;

};
let inputValue = countLetters('module one lighthouse');
console.log(inputValue);
let expectedValue = {
  m: 1,
  o: 3,
  d: 1,
  u: 2,
  l: 2,
  e: 3,
  n: 1,
  i: 1,
  g: 1,
  h: 2,
  t: 1,
  s: 1
};
assertEqual(inputValue.toString(), expectedValue.toString());

module.exports = countLetters;