# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @robinshrestha/lotide`

**Require it:**

`const _ = require('@username/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual`: Evaluate if the two given arrays are equal or not
* `assertEqual`: Evaluate if the two given  inputs are equal or not
* `assertObjectsEqual`: Evaluate if the two given objects are equal or not
* `countLetters`: Create an object from input string with keys as letters and values as how many times they appear
* `countOnly`: Count the number of times a given object element items occurs in a given array of items.
* `eqArrays`: Evaluate the two input array whether they are equal or not
* `eqObjects`: Evalute whether two given objects are equal or not
* `findKey`: Find the key in a given object with the given condition
* `findKeyByValue`: Find the key of a given object and a value
* `flatten`: Remove all nested arrays from a given array input
* `head`: Output a first element of an input array
* `letterPositions`: Output index of all the letters in a given string
* `map`: get an modifed array from the given array and a codition
* `middle`: Output middle elements from an input array
* `tail`: Out put an array without the first element of the given array
* `takeUntil`: Get a new array with an input array and a condition satisfying the elements
* `without`: Output array whose elements are not common in the two input arrays
