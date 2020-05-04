const assertEqual = require('../assertEqual');
const tail = require('../tail');

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!

const words2 = [];
tail(words2); // no need to capture the return value since we are not checking it
assertEqual(words2.length, 0); // original array should still have 3 elements!

const words3 = ["Yo Yo"];
tail(words2); // no need to capture the return value since we are not checking it
assertEqual(words3.length, 1); // original array should still have 3 elements!