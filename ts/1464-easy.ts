
/**
 * 自己－－ｈｈｈｈ
 * @param nums 
 * @returns 
 */
function maxProduct(nums: number[]): number {
  nums.sort((a, b) => b - a)
  const a = nums[0] - 1, b = nums[1] - 1
  return a * b
};