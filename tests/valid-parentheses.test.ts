import { describe, test, expect } from "@jest/globals";
import { isValid } from "../easy/string/valid-parentheses";

describe("valid-parentheses", () => {
  test("input: s = \"()\" output: true", () => {
    const s:string = "()";
    const res = isValid(s);
    
    expect(res).toEqual(true);
  });

  test("input: s = \"()[]{}\" output: true", () => {
    const s:string = "()[]{}";
    const res = isValid(s);
    
    expect(res).toEqual(true);
  });

  test("input: s = \"(]\" output: false", () => {
    const s:string = "(]";
    const res = isValid(s);
    
    expect(res).toEqual(false);
  });
});