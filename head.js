
// FUNCTION IMPLEMENTATION
const head = function(array1) {
  let actual = "";
  if (array1 !== []) {
    actual = array1[0]; //string value set to first item of input array
  } else {
    actual = undefined;
  }
  return actual;
};

module.exports = head;