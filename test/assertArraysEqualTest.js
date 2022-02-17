//assertArraysEqualTest
const assertArraysEqual = require('../assertArraysEqual');

assertArraysEqual([1, 2, 3], [1, 2, 3], true); //checking for numbers
assertArraysEqual([1, 2, 3], [3, 2, 1]);
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]);// checking for numbers
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]);
