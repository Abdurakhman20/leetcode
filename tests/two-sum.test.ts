import {describe, expect, test} from '@jest/globals';
import { twoSum } from "../easy/array/two-sum";

describe("two-sum", () => {
  test("input: nums=[2, 7, 11, 15], target=9 output: [0, 1]", () => {
    const nums: number[] = [2, 7, 11, 15];
    const target: number = 9;

    const res = twoSum(nums, target);

    expect(res).toEqual([0, 1]);
  });

  test("input: nums=[3, 2, 4], target=6 output: [1, 2]", () => {
    const nums: number[] = [3, 2, 4];
    const target: number = 6;

    const res = twoSum(nums, target);

    expect(res).toEqual([1, 2]);
  });

  test("input: nums=[3, 3], target=6 output: [0, 1]", () => {
    const nums: number[] = [3, 3];
    const target: number = 6;

    const res = twoSum(nums, target);

    expect(res).toEqual([0, 1]);
  });
});