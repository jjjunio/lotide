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

// assertArraysEqual should be used to test the new middle function

// assertArraysEqual(middle([1], [])); // => []
// assertArraysEqual(middle([1, 2], [])); // => []
// assertArraysEqual(middle([1, 2, 3]), [2]); // => [2]
// assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]); // => [3]
// assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);// => [2, 3]
// assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); // => [3, 4]

console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]