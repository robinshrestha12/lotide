//This function will keep collecting items from a provided array until the callback provided returns a truthy value.
const takeUntil = function(array, callback) {
  let finalArray = [];
  for (let arr of array) {
    //checking whether callback(parameters) returns truthy value
    if (!callback(arr)) {
      finalArray.push(arr);
    } else {
      return finalArray;
    }
  }
  return finalArray;
};

module.exports = takeUntil;