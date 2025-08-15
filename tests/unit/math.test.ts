import { add } from "@/math";

describe("add function", () => {
  test("adds numbers correctly", () => {
    expect(add(1, 2, 3)).toBe(6);
  });
});
