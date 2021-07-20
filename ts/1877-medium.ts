/*
 * @lc app=leetcode.cn id=1877 lang=typescript
 *
 * [1877] 数组中最大数对和的最小值
 */

//自己--贪心+排序

// @lc code=start
function minPairSum(nums: number[]): number {
  nums.sort((a, b) => a - b)
  const Len = nums.length
  let left = 0, right = Len - 1, res = 0
  while (left < right) {
    const floor = nums[left++] + nums[right--]
    res = Math.max(res, floor)
  }
  return res
};
// @lc code=end

minPairSum([3, 5, 4, 2, 4, 6])