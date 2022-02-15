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

module.exports = tail;
