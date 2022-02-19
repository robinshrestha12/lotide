// find key with a given value
const findKey = function(object, callback) {
  for (const key of Object.keys(object)) {
    // checking whether callback value is truthy
    if (callback(object[key])) {
      return key;
    }
  }
};

module.exports = findKey;


