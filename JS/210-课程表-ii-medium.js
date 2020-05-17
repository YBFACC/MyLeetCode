/*
 * @lc app=leetcode.cn id=210 lang=javascript
 *
 * [210] 课程表 II
 */

// @lc code=start
/**
 * 参考--拓扑排序-bfs
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function (numCourses, prerequisites) {
  let inDegree = new Array(numCourses).fill(0) // 初始化入度数组
  let graph = {} // 哈希表
  for (const prerequisite of prerequisites) {
    inDegree[prerequisite[0]]++
    if (graph[prerequisite[1]]) {
      graph[prerequisite[1]].push(prerequisite[0])
    } else {
      let list = []
      list.push(prerequisite[0])
      graph[prerequisite[1]] = list
    }
  }
  let res = []
  let queue = []
  for (let i = 0; i < numCourses; i++) {
    if (inDegree[i] === 0) {
      queue.push(i)
    }
  }

  while (queue.length > 0) {
    let curr = queue.shift()
    res.push(curr)
    let toEnQueue = graph[curr]
    if (toEnQueue && toEnQueue.length) {
      for (let i = 0; i < toEnQueue.length; i++) {
        inDegree[toEnQueue[i]]--
        if (inDegree[toEnQueue[i]] === 0) {
          queue.push(toEnQueue[i])
        }
      }
    }
  }
  return res.length === numCourses ? res : []
}
// @lc code=end

console.log(
  findOrder(6, [
    [3, 0],
    [3, 1],
    [4, 1],
    [4, 2],
    [5, 3],
    [5, 4]
  ])
)
