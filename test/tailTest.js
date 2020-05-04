
const assert = require('chai').assert;
const tail   = require('../tail');

describe("this tests for the tail or number of elements in the tail of an array", () => {

  it("returns 3 for ['Yo Yo', 'Lighthouse', 'Labs']", () => {
    const words = ["Yo Yo", "Lighthouse", "Labs"];
    tail(words);
    assert.strictEqual(words.length, 3);
  });

  it("returns 0 for []", () => {
    const words2 = [];
    tail(words2);
    assert.strictEqual(words2.length, 0);
  });

  it("returns 1 for ['Yo Yo']", () => {
    const words3 = ["Yo Yo"];
    tail(words3);
    assert.strictEqual(words3.length, 1);
  });

});//end