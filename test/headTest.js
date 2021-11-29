const head = require("../head");
const assert = require("chai").assert;

describe("#head", () => {
  it("returns 'lighthouse Labs' for ['Lighthouse Labs' , 'Bootcamp']", () => {
    assert.strictEqual(
      head(["Lighthouse Labs", "Bootcamp"]),
      "Lighthouse Labs"
    );
  });
  it("returns 1 for [1, 1]", () => {
    assert.strictEqual(head([1, 1]), 1);
  });
  it("returns 5 for [5, 6, 7]", () => {
    assert.strictEqual(head([5, 6, 7]), 5);
  });
  it("returns 'Hello' for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.strictEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
  });
});

// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);
// assertEqual(head([5,6,7]), 5);
// assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
