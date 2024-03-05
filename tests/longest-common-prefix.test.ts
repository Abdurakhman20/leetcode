import { describe, test, expect } from "@jest/globals";
import { longestCommonPrefix } from "../easy/string/longest-common-prefix";

describe("longest-common-prefix", () => {
  test("input: strs=[\"flower\", \"flow\", \"flight\"] output: \"fl\"", () => {
    const strs:string[] = ["flower", "flow", "flight"];
    const res = longestCommonPrefix(strs);

    expect(res).toEqual("fl");
  });

  test("input: strs=[\"dog\", \"racecar\", \"car\"] output: \"\"", () => {
    const strs:string[] = ["dog", "racecar", "car"];
    const res = longestCommonPrefix(strs);

    expect(res).toEqual("");
  });
})