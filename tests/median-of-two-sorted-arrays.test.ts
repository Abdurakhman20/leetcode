import {describe, expect, test} from '@jest/globals';
import { findMedianSortedArrays } from "../hard/array/median-of-two-sorted-arrays";

describe("median-of-two-sorted-arrays", () => {
  test("input: nums1 = [1, 3], nums2 = [2] output: 2.00000", () => {
    const nums1:number[] = [1, 3];
    const nums2:number[] = [2];
    const res = findMedianSortedArrays(nums1, nums2);

    expect(res).toEqual(2.00000);
  });

  test("input: nums1 = [1, 2], nums2 = [3, 4] output: 2.00000", () => {
    const nums1:number[] = [1, 2];
    const nums2:number[] = [3, 4];
    const res = findMedianSortedArrays(nums1, nums2);

    expect(res).toEqual(2.5);
  });
})