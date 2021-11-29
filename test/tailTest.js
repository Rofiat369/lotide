const assert = require("chai").assert;
const tail = require("../tail");

describe("#tail", () => {
  it("returns ['lighthouse', 'labs'], for ['yo yo', 'lighthouse', 'labs']", () => {
    assert.deepEqual(tail(["Yo Yo", "Lighthouse", "Labs"]), [
      "Lighthouse",
      "Labs",
    ]);
  });
  it("returns ['am', 'discombobulated'] for ['I', 'am', 'discombobulated']", () => {
    assert.deepEqual(tail(["I", "am", "discombobulated"]), ["am", "discombobulated"]);
  });
});

// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);
// const words = ["Yo Yo", "Lighthouse", "Labs"];
// const result = tail(words);
// assertEqual(result.length, 2);
