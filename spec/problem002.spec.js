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

  it("should return the sum of the even values in the Fibonacci sequence", () => {
    const expectedAnswers = [ 10, 10, 44, 44, 798, 60696, 4613732 ];
    const argumentsForAnswers = [ 8, 10, 34, 60, 1000, 100000, 4000000 ];

    for (let i = 0; i < argumentsForAnswers.length; i++) {
      const actualAnswer = fibonacciEvenSum(argumentsForAnswers[i]);

      expect(actualAnswer).toEqual(expectedAnswers[i]);
    }
  });
});