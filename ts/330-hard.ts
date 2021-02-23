/*
 * @lc app=leetcode.cn id=330 lang=typescript
 *
 * [330] 按要求补齐数组
 */

//参考--贪心--从小到大

//加一个数对数进行覆盖
//有一个范围的数，可以满足范围里任意值都可以实现。加一个数扩大范围。直到满足要求

// @lc code=start
function minPatches(nums: number[], n: number): number {
  let res = 0, pos = 0, curr = 0
  const Len = nums.length
  for (let i = 1; i <= n;) {
    if (nums[pos] > i || pos >= Len) {
      res++
      curr += i
    } else {
      curr += nums[pos]
      pos++
    }
    i = curr + 1
  }
  return res
};
// @lc code=end

minPatches([], 7)