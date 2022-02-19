//This function returns all the indices in the string where each character is found.
const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) { //iterating through the sentence
    if (sentence[i] === " ") {
      continue;
    }
    if (results[sentence[i]]) { //if already present push as another index item.
      results[sentence[i]].push(i);
    } else {
      results[sentence[i]] = [i];
    }
  }
  return results;
};

module.exports = letterPositions;