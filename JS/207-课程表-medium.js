/*
 * @lc app=leetcode.cn id=207 lang=javascript
 *
 * [207] 课程表
 */

// @lc code=start
/**
 * 参考--DFS--检查是否有环
 * set存储所需前置条件
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
  if (numCourses === 1) return true
  const list = Array.from({ length: numCourses }, () => new Set())

  for (const prerequisite of prerequisites) {
    const condition = prerequisite[1]
    const curr = prerequisite[0]
    list[curr].add(condition)
  }
  let flags = Array.from({ length: numCourses }, () => 0)

  function dfs(index) {
    if (flags[index] === 1) return false
    if (flags[index] === -1) return true

    flags[index] = 1

    for (const item of list[index]) {
      if (!dfs(item)) return false
    }
    flags[index] = -1
    return true
  }

  for (let i = 0; i < numCourses; i++) {
    if (!dfs(i)) return false
  }

  return true
}
// @lc code=end
console.log(
  canFinish(2, [
    [1, 0],
    [0, 1]
  ])
)
