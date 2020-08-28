/*
 * @lc app=leetcode.cn id=229 lang=typescript
 *
 * [229] 求众数 II
 */

// @lc code=start
//参考--摩尔投票选n/3
//可以等价于双指针-双统计数
function majorityElement(nums: number[]): number[] {
  if (nums.length === 0 || nums.length === 1) return nums
  const Limit = nums.length / 3
  const res: number[] = []
  let cand1 = nums[0]
  let count1 = 0
  let cand2 = nums[0]
  let count2 = 0
  for (const num of nums) {
    if (cand1 === num) {
      count1++
      continue
    }
    if (cand2 === num) {
      count2++
      continue
    }
    if (count1 == 0) {
      cand1 = num
      count1 = 1
      continue
    }
    if (count2 === 0) {
      cand2 = num
      count2 = 1
      continue
    }
    count1--
    count2--
  }
  count1 = 0
  count2 = 0
  for (const num of nums) {
    if (cand1 === num) count1++
    else if (cand2 === num) count2++
  }
  if (count1 > Limit) res.push(cand1)
  if (count2 > Limit) res.push(cand2)
  return res
}
// @lc code=end

majorityElement([1])
