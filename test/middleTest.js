// const assertArraysEqual = require('../assertArraysEqual');

const assert = require('chai').assert;
const eqArrays = require('../eqArrays');
const middle = require('../middle');


// assertArraysEqual(middle([1]), []); // => []
// assertArraysEqual(middle([1, 2]), []); // => []
// assertArraysEqual(middle([1, 2, 3]), [2]); // => [2]
// assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]); // => [3]
// assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);// => [2, 3]
// assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); // => [3, 4]

describe("this tests for the middle element of an array", () => {

  it("returns [] for if array has only one or two elements", () => {
    assert.deepEqual(middle([1]), []);
  });

  it("returns [] for if array has only one or two elements", () => {
    assert.deepEqual(middle([1,2]), []);
  });

  it("returns array[1] for if array has three elements", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });

  it("returns array[2] for if array has five elements", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
  });

  it("returns array[1] and array[2] for if array has four elements", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });

  it("returns array[2] and array[3] for if array has six elements", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
  });



});//end