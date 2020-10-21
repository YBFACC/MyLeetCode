/*
 * @lc app=leetcode.cn id=1306 lang=typescript
 *
 * [1306] 跳跃游戏 III
 */

// @lc code=start
//自己--DFS+去重
function canReach(arr: number[], start: number): boolean {
  let res = false
  const set = new Set()
  const dfs = function (index: number) {
    if (res || set.has(index)) return
    if (arr[index] === 0) {
      res = true
      return
    }
    set.add(index)
    let value = arr[index]
    dfs(index + value)
    dfs(index - value)
  }
  dfs(start)
  return res
};
// @lc code=end

canReach([3, 0, 2, 1, 2], 2)
canReach([4, 2, 3, 0, 3, 1, 2], 5)
