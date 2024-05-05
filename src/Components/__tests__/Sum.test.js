import { Sum } from "../sum";

test("Sum function should calculate the sum of the two numbers", () => {
  const result = Sum(3, 4);
  //Assertion
  expect(result).toBe(7);
});
