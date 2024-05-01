import { fibonacciEvenSum } from "../src/problem002.js";

describe("Problem #1 Tests (Even Fibonacci Numbers),", () => {
  it("should return a number", () => {
    const expectedType = "number";

    const actualType = typeof fibonacciEvenSum(10);

    expect(actualType).toBe(expectedType);
  });

  it("should return an even value", () => {
    const expected = 0;

    const actual = fibonacciEvenSum(10) % 2;

    expect(actual).toEqual(expected);
  });
});