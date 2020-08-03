/*
 * @lc app=leetcode.cn id=207 lang=javascript
 *
 * [207] 课程表
 */

// @lc code=start
/**
 * 自己--拓扑排序--度标记
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
  let queue = []
  for (let i = 0; i < list.length; i++) {
    if (list[i].size === 0) queue.push(i)
  }
  let count = 0

  while (queue.length > 0) {
    let curr = queue.shift()
    count++
    for (let i = 0; i < list.length; i++) {
      if (list[i].has(curr)) {
        list[i].delete(curr)
        if (list[i].size === 0) queue.push(i)
      }
    }
  }
  return count === numCourses
}
// @lc code=end
console.log(
  canFinish(2, [
    [1, 0],
    [0, 1]
  ])
)
