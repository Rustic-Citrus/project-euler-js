import { multiplesOf3and5 } from "../src/problem001.js";

describe("Problem #1 Tests (Multiples of 3 or 5)", () => {
  it("should return a number", () => {
    const expectedType = "number";

    const actualType = typeof multiplesOf3and5(1000);

    expect(actualType).toBe(expectedType);
  });

  it("should return the correct answer", () => {
    const expectedAnswerOne = 543;
    const expectedAnswerTwo = 233168;
    const expectedAnswerThree = 16687353;
    const expectedAnswerFour = 89301183;

    const actualAnswerOne = multiplesOf3and5(49);
    const actualAnswerTwo = multiplesOf3and5(1000);
    const actualAnswerThree = multiplesOf3and5(8456);
    const actualAnswerFour = multiplesOf3and5(19564);

    expect(actualAnswerOne).toEqual(expectedAnswerOne);
    expect(actualAnswerTwo).toEqual(expectedAnswerTwo);
    expect(actualAnswerThree).toEqual(expectedAnswerThree);
    expect(actualAnswerFour).toEqual(expectedAnswerFour);
  });
});
