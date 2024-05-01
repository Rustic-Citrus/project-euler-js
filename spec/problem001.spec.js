import { multiplesOf3and5 } from "../src/problem001.js";

describe("Problem #1 Tests (Multiples of 3 or 5)", () => {
  it("should return a number", () => {
    const expectedType = "number";

    const actualType = typeof multiplesOf3and5(1000);

    expect(actualType).toBe(expectedType);
  });
});
