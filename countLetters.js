// countLetters method returns object of letters with number of repetations
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
module.exports = countLetters;