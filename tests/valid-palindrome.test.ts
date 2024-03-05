import {describe, expect, test} from '@jest/globals';
import { isPalindrome } from "../easy/string/valid-palindrome";

describe("valid palindrome", () => {
  test("input: s=\"A man, a plan, a canal: Panama\", output: true", () => {
    const s = "A man, a plan, a canal: Panama";
    const res = isPalindrome(s);

    expect(res).toEqual(true);
  });

  test("input: s=\"race a car\", output: false", () => {
    const s = "race a car";
    const res = isPalindrome(s);

    expect(res).toEqual(false);
  });

  test("input: s=\" \", output: true", () => {
    const s = " ";
    const res = isPalindrome(s);

    expect(res).toEqual(true);
  });
})