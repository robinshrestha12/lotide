//countOnly returns an object containing counts of everything that the input object listed.
const countOnly = function(allItems, itemsToCount) {
  const results = {};
  for (const item of allItems) { //iterating through items
    if (itemsToCount[item]) {
      if (results[item]) { //checking if the item value is in another array
        results[item] += 1; //incrementing the value if available already
      } else {
        results[item] = 1;
      }
    }
  }
  return results;
};

module.exports = countOnly;