
/**
 * 参考－－脑筋急转弯
 * @param nums 
 * @returns 
 */
function isIdealPermutation(nums: number[]): boolean {
  let n = nums.length, minSuff = nums[n - 1]
  for (let i = n - 3; i >= 0; i--) {
    if (nums[i] > minSuff) return false
    minSuff = Math.min(minSuff, nums[i + 1])
  }
  return true
};

isIdealPermutation([2, 0, 1])
isIdealPermutation([1, 2, 0])
