const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

const middle = function(array) {
  // array should have more than 2 elements
  if (array.length < 3) {
    return [];
    // check array has a middle 
  } else if (array.length % 2 !== 0) {
    // if middle exists element(s) in it should be returned
    return [array[Math.floor(array.length / 2)]];
  } else if (array.length % 2 === 0) {
    return [array[Math.floor(array.length / 2)] - 1, array[Math.floor(array.length / 2)]];
  }
};

module.exports = middle;
