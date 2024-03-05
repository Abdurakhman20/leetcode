import {describe, expect, test} from '@jest/globals';
import { climbStairs } from "../easy/dynamic/climbing-stairs";

describe("climbing stairs", () => {
  test("input: n = 2, output: 2", () => {
    const n = 2;
    const res = climbStairs(n);

    expect(res).toEqual(2);
  });

  test("input: n = 3, output: 3", () => {
    const n = 3;
    const res = climbStairs(n);

    expect(res).toEqual(3);
  });
})