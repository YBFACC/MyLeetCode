/*
 * @lc app=leetcode.cn id=491 lang=typescript
 *
 * [491] 递增子序列
 */

// @lc code=start
//参考--回溯
function findSubsequences(nums: number[]): number[][] {
  const res: number[][] = []
  const set = new Set()
  const dfs = function (start: number, list: number[]) {
    if (list.length > 1) {
      const str = list.join(',')
      if (!set.has(str)) {
        set.add(str)
        res.push(list.slice())
      }
    }
    const pre = list[list.length - 1]
    for (let i = start; i < nums.length; i++) {
      if (list.length === 0 || pre <= nums[i]) {
        list.push(nums[i])
        dfs(i + 1, list)
        list.pop()
      }
    }
  }
  dfs(0, [])
  return res
}
// @lc code=end
findSubsequences([4, 6, 7, 7])
