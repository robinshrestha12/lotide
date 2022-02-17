//Equal Array function
const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {//if lengths are not equal
    return false;
  } else {
    for (let i = 0; i < array2.length; i++) {
      if (typeof array1[i] !== typeof array2[i]) {//if type of items are not same
        return false;
      } else {
        if (array1[i] !== array2[i]) { // if items are not equal
          return false;
        }
      }
    }
  }
  return true;
};

module.exports = eqArrays;


