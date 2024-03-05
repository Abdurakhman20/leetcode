import {describe, expect, test} from '@jest/globals';
import { groupAnagrams } from "../medium/array/group-anagrams";

describe("group-anagrams", () => {
  test("input: strs=[\"eat\",\"tea\",\"tan\",\"ate\",\"nat\",\"bat\"], output: [[\"bat\"],[\"nat\",\"tan\"],[\"ate\",\"eat\",\"tea\"]]", () => {
    const strs: string[] = ["eat","tea","tan","ate","nat","bat"];
    const res = groupAnagrams(strs);

    expect(res).toEqual([["eat","tea","ate"],["tan","nat"],["bat"]]);
  });

  test("input: strs=[\"\"], output: [[\"\"]]", () => {
    const strs: string[] = [""];
    const res = groupAnagrams(strs);

    expect(res).toEqual([[""]]);
  });
})