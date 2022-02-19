//fatten removes all nested arrays and returns an array
const flatten = function(arrayCollection) {
  let flattenedArray = [];
  for (let i = 0; i < arrayCollection.length; i++) {//iterating through input array
    if (Array.isArray(arrayCollection[i]) === true) { // if the item of the input array is array
      for (let j = 0; j < arrayCollection[i].length; j++) {
        flattenedArray.push(arrayCollection[i][j]); // pushing the values to new array
      }
    } else {
      flattenedArray.push(arrayCollection[i]);
    }
  }
  return flattenedArray;
};

module.exports = flatten;