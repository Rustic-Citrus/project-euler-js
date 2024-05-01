import { largestPrimeFactor } from "../src/problem003.js";

describe("Problem #3 Tests (Largest Prime Factor),", () => {
  it("should return a number", () => {
    const expectedType = "number";

    const actualType = typeof largestPrimeFactor(2);

    expect(actualType).toBe(expectedType);
  });

  it("should return the correct answer", () => {
    const expectedAnswers = [ 2, 3, 5, 7, 2, 29 ];
    const argumentsForActualAnswers = [ 2, 3, 5, 7, 8, 13195 ];

    for (let i = 0; i < expectedAnswers.length; i++) {
      const actualAnswer = largestPrimeFactor(argumentsForActualAnswers[i]);

      expect(actualAnswer).toEqual(expectedAnswers[i]);
    }
  });

  it("should return the correct answer even for large numbers", () => {
    pending("massively slows down runtime");

    const expected = 6857;

    const actual = largestPrimeFactor(600851475143);

    expect(actual).toEqual(expected);
  });
});