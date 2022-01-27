// FUNCTION IMPLEMENTATION
function head(array1) {
  let actual = "";
  if (array1 != []) {
    actual = array1[0];
  }
  else {
    actual = undefined;
  }
  return actual;
}

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
      console.log(`🛑🛑🛑 Assertion Failed: "${actual}" !== "${expected}`);
    }
  }
};
// TEST CODE
assertEqual(head([5, 6, 7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");