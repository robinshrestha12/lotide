// find key by a given value function
const findKeyByValue = function(objectInput, valueInput) {
  //iterating over the keys
  for (const key of Object.keys(objectInput)) {
    //comparing object values with given values
    if (objectInput[key] === valueInput) {
      return key;
    }
  }
};

module.exports = findKeyByValue;