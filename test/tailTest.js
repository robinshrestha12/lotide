// TEST CODE
const assertEqual = require('../assertEqual')
const tail = require('../tail');

const result = tail(["Hello", "Lighthouse", "Hello", "Labs"]);
assertEqual(result[1], "Hello");
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!
const numbers = tail([5, 6, 7]);
assertEqual(numbers[0], 5);
assertEqual(numbers[1], 5);