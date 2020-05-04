// map function will take two args 
//  - an array to the map 
//  - a callback function 

const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) return false;

  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) return false;
  }
  return true;
};

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2) === true) {
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

const words = ["ground", "control", "to", "major", "tom"];
const words2 = ["i'm", "stepping", "through", "the", "door"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const results1 = map(words, word => word[0]);
const results2 = map(words2, word => word[0]);

const expectedOutcome = [ 'g', 'c', 't', 'm', 't' ];
const expectedOutcome2 = [ 'i', 's', 't', 't', 'd' ];

assertArraysEqual(results1, expectedOutcome);
assertArraysEqual(results2, expectedOutcome2);

module.exports = map;