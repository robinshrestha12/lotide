
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

module.exports = head;