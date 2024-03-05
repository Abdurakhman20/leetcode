import {describe, expect, test} from '@jest/globals';
import {singleNumber} from "../easy/array/single-number";

describe("single-number", () => {
  test("input: nums = [2,2,1], output: 1", () => {
    const nums: number[] = [2, 2, 1];
    const res = singleNumber(nums);

    expect(res).toEqual(1);
  });

  test("input: nums = [4,1,2,1,2], output: 4", () => {
    const nums: number[] = [4,1,2,1,2];
    const res = singleNumber(nums);

    expect(res).toEqual(4);
  });

  test("input: nums = [1], output: 1", () => {
    const nums: number[] = [1];
    const res = singleNumber(nums);

    expect(res).toEqual(1);
  });
})