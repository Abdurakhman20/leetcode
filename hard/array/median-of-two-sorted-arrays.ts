export function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  const nums = [...nums1, ...nums2].sort((a, b) => a - b);
  const middleIndex = Math.floor(nums.length / 2);

  if(nums.length % 2 !== 0) {
      return nums[middleIndex]; 
  } else {
      return (nums[middleIndex] + nums[middleIndex - 1]) / 2; 
  }
};