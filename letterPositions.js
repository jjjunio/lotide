const letterPositions = function(sentence) {
  const results = {};
  // sentence = sentence.split(' ').join('');
  
  for (let i = 0; i < sentence.length; i++) {
    if (!results[sentence[i]]) {
      results[sentence[i]] = [];
    }
    results[sentence[i]].push(i);
  }
  delete results[" "];
  return results;
};



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
console.log(letterPositions('lighthouse in the house'));
// assertArraysEqual(letterPositions('hello').e, [1]);

module.exports = letterPositions;