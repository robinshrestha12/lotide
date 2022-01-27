// FUNCTION IMPLEMENTATION
const tail = function (arrayOne) {
  let tailArray = [];
  if (arrayOne !== []) {
    tailArray = arrayOne.slice(1);
  } else {
    tailArray = undefined;
  }
  return tailArray;
};
const assertEqual = function (actual, expected) {
  if (((typeof (actual) === "number")) && ((typeof (expected) === "number"))) {
    if (actual === expected) {
      console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
    } else {
      console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
    }

  } else {
    for (let i = 0; i < actual.length; i++) {

      if (((typeof (actual[i]) === "number")) && ((typeof (expected) === "number"))) {
        if (actual === expected) {
          console.log(`✅✅✅ Assertion Passed: ${actual[i]} === ${expected}`);
        } else {
          console.log(`🛑🛑🛑 Assertion Failed: ${actual[i]} !== ${expected}`);
        }
      } else {
        if (actual[i] === expected) {
          console.log(`✅✅✅ Assertion Passed: "${actual[i]}" === "${expected}"`);
        } else {
          console.log(`🛑🛑🛑 Assertion Failed: "${actual[i]}" !== "${expected}"`);
        }
      }
    }
  }
};
// TEST CODE
assertEqual(tail([5, 6, 7]), 5);
assertEqual(tail(["Hello", "Lighthouse", "Hello", "Labs"]), "Hello");
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!