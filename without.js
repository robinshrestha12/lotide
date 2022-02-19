//This function return a subset of a given array, removing unwanted elements.
const without = function(srArray, rmvArray) {
  let finalArray = srArray;
  if (srArray.length !== 0 && rmvArray.length !== 0) { //if strings are not empty
    for (let i = 0; i < srArray.length; i++) { //Iterating through the first array
      for (let j = 0; j < rmvArray.length; j++) { //iterating through second array

        if (typeof srArray[i] === typeof rmvArray[j]) { //if types are equal
          if (srArray[i] === rmvArray[j]) { //if values are equal
            finalArray.splice(i, 1); //getting rid of the number
            return finalArray;
          }
        }
      }
    }
  }
  return finalArray;
};

module.exports = without;