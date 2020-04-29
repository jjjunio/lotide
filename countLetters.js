const assertEqual = function(actual, expected) {
  actual === expected ? console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`) : console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
};

const countLetters = function(string) {
  const result = {};
  string = string.split(' ').join('');
  
  for (let letter of string) {
    if (!result[letter]) {
      result[letter] = 0;
    }
    result[letter] += 1;
  }
  return result;
};

console.log(countLetters('lighthouse in the house'));


