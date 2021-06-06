/*
 * @lc app=leetcode.cn id=477 lang=typescript
 *
 * [477] 汉明距离总和
 */

//参考--每一位0和1的排列组合

// @lc code=start
function totalHammingDistance(nums: number[]): number {
  let res = 0
  for (let i = 0; i < 30; i++) {
    let c = 0
    for (const num of nums) {
      c += (num >>> i) & 1
    }
    res += c * (nums.length - c)
  }
  return res
};
// @lc code=end

totalHammingDistance([])