/*
 * @lc app=leetcode.cn id=486 lang=typescript
 *
 * [486] 预测赢家
 */

// @lc code=start
//参考--递归--去重
function PredictTheWinner(nums: number[]): boolean {

  const visited = new Map()

  function helper(i: number, j: number): number {
    const path = `${i},${j}`
    if (visited.has(path)) return visited.get(path)
    if (i === j) {
      return nums[i]
    }
    const left = nums[i] - helper(i + 1, j)
    const right = nums[j] - helper(i, j - 1)
    const max = Math.max(left, right)
    visited.set(path, max)
    return max
  }
  return helper(0, nums.length - 1) >= 0
};
// @lc code=end


console.log(PredictTheWinner([1, 5, 233, 7]))