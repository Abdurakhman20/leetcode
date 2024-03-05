import {describe, expect, test} from '@jest/globals';
import { strStr } from "../easy/string/first-occurrence-in-a-string";

describe("find-the-index-of-the-first-occurrence-in-a-string", () => {
  test("input: haystack = \"sadbutsad\", needle = \"sad\", output: 0", () => {
    const haystack:string = "sadbutsad";
    const needle:string = "sad";
    const res = strStr(haystack, needle);

    expect(res).toEqual(0);
  });

  test("input: haystack = \"leetcode\", needle = \"leeto\", output: -1", () => {
    const haystack:string = "leetcode";
    const needle:string = "leeto";
    const res = strStr(haystack, needle);

    expect(res).toEqual(-1);
  });
})