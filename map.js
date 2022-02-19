//This function returns an array according to callback function.
const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item)); // calling callback and pushing the callback function returned item.
  }
  return results;
};

module.exports = map;