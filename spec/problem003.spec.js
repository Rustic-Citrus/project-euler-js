import { largestPrimeFactor } from "../src/problem003.js";

describe("Problem #1 Tests (Largest Prime Factor),", () => {
  it("should return a number", () => {
    const expectedType = "number";

    const actualType = typeof largestPrimeFactor(2);

    expect(actualType).toBe(expectedType);
  });
});