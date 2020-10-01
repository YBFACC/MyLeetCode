/*
 * @lc app=leetcode.cn id=1262 lang=typescript
 *
 * [1262] 可被三整除的最大和
 */

// @lc code=start
//参考--状态转移-取余之后，只用3种状态
function maxSumDivThree(nums: number[]): number {

  let res = [0, Number.MIN_SAFE_INTEGER, Number.MIN_SAFE_INTEGER]

  for (const num of nums) {
    const temp = num % 3
    if (temp === 0) {
      res[0] += num
      res[1] += num
      res[2] += num
    } else if (temp === 1) {
      let a = Math.max(res[0], res[2] + num)
      let b = Math.max(res[1], res[0] + num)
      let c = Math.max(res[2], res[1] + num)
      res = [a, b, c]
    } else if (temp === 2) {
      let a = Math.max(res[0], res[1] + num)
      let b = Math.max(res[1], res[2] + num)
      let c = Math.max(res[2], res[0] + num)
      res = [a, b, c]
    }
  }
  return res[0]
};
// @lc code=end

maxSumDivThree([1, 2, 3, 4, 4])

maxSumDivThree([3, 6, 5, 1, 8])