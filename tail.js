// FUNCTION IMPLEMENTATION
const tail = function(arrayOne) {
  let tailArray = [];
  if (arrayOne !== []) {
    tailArray = arrayOne.slice(1); //taking out one value and making another array.
  } else {
    tailArray = undefined;
  }
  return tailArray;
};

module.exports = tail;
