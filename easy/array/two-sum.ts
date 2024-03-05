export function twoSum(nums: number[], target: number): number[] {
  let temp = new Map<number, number>();
  for(let i = 0; i < nums.length; i++) {
      if(temp.has(target - nums[i])) {

        const complementIndex = temp.get(target-nums[i]);

        if(complementIndex !== undefined) {
          return [complementIndex, i];
        }
      }

      temp.set(nums[i], i);
  }

  return [-1, -1];
};