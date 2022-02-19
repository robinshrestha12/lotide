//This function return a subset of a given array, removing unwanted elements.
const without = function(srArray, rmvArray) {
  let finalArray = [];
  if (srArray.length !== 0 && rmvArray.length !== 0) { //if strings are not empty
    for (let i = 0; i < srArray.length; i++) { //looping through first input array
      if (rmvArray.indexOf(srArray[i]) < 0) { //if item of first array is not in second array
        finalArray.push(srArray[i]);
      }
  
    }
  }
  return finalArray;
};

module.exports = without;