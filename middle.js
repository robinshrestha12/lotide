//middle number
const middle = function(arrayInput) {
  let outputArray = [];
  if (arrayInput.length === 0 || arrayInput.length === 1 || arrayInput.length === 2) { //if none or 1 or 2 item
    return outputArray;
  } else {
    if (arrayInput.length % 2 === 1) { // if odd number of items
      outputArray.push(arrayInput[(arrayInput.length - 1) / 2]);
      return outputArray;
    } else {
      outputArray.push(arrayInput[((arrayInput.length) / 2) - 1]);
      outputArray.push(arrayInput[((arrayInput.length) / 2)]);
      return outputArray;
    }
  }
};

module.exports = middle;
