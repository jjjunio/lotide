const assertEqual = function(actual, expected) {
  actual === expected ? console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`) : console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
};

// Implement the definition for function eqObjects which will take in two objects and returns true or false, based on a perfect match.

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  const object1Props = Object.getOwnPropertyNames(object1);
  const object2Props = Object.getOwnPropertyNames(object2);

  if (object1Props.length != object2Props.length) {
    return false;
  }

  for (let i = 0; i < object1Props.length; i++) {
    let propName = object1Props[i];
    if (Array.isArray(object1[propName])) {
      if (!eqArrays(object1[propName], object2[propName])) {
        return false;
      }
    } else if (object1[propName] !== object2[propName]) {
      return false;
    }
  }
  return true;
};

const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};


const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual((eqObjects(cd, dc)), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual((eqObjects(cd, cd2)), false); // => false

module.exports = eqObjects;