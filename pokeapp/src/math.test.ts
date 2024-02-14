import { describe, it, expect } from "vitest";
import { cube } from "./math";

describe("cube", () => {
  it("returns 27 for 3", () => {
    const result = cube(3);
    expect(result).toBe(27);
  });
});
