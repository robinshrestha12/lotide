const eqArrays = require('./eqArrays'); //importing eqArrays
 
const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {// if lengths are not equal
    return false;
  }
  for (let variables of Object.keys(object1)) {
    if (Array.isArray(object1[variables]) && Array.isArray(object2[variables])) {// if both object items are arrays
      return eqArrays(object1[variables], object2[variables]);
    }
    if (object1[variables] !== object2[variables]) {//if both the object item values are not equal
      return false;
    }
  }
  return true;
};

module.exports = eqObjects;
