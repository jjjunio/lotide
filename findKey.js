

const findKey = function (object, callback) {
  //takes in n object and callback
  //scan an object and return first key which the callback returns as a truthy value
  //if no key found return undefined  
  const keys = Object.keys(object)
  for (let key of keys) {
    if (callback(object[key])) {
      return key;
    }
  }
};

const assertEqual = function(actual, expected) {
  actual === expected ? console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`): 
                        console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
};

assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2), "noma"); // => "noma"

assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 5 }
}, x => x.stars === 5), "Akelarre"); // => "Akelarre"

assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 7 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 5 }
}, x => x.stars === 7), "elBulli"); // => "elBulli"

module.exports = findKey;

