// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  
  if (eqObjects(actual, expected) === true) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

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

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectsEqual(ab, ba); // => true

// const abc = { a: "1", b: "2", c: "3" };
// eqObjects(ab, abc); // => false