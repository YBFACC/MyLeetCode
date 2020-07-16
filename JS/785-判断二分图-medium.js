/*
 * @lc app=leetcode.cn id=785 lang=javascript
 *
 * [785] 判断二分图
 */

// @lc code=start
/**
 * 参考--染色=>二分--bfs
 * 第一次使用邻接表
 * @param {number[][]} graph
 * @return {boolean}
 */
const isBipartite = graph => {
  const visited = Array.from({ length: graph.length })
  for (let i = 0; i < visited.length; i++) {
    if (visited[i]) continue
    const queue = [i]
    visited[i] = 1
    while (queue.length > 0) {
      const curr = queue.shift()
      const currColor = visited[curr]
      const neighborColor = -currColor
      for (let i = 0; i < graph[curr].length; i++) {
        const neighbor = graph[curr][i]
        if (!visited[neighbor]) {
          visited[neighbor] = neighborColor
          queue.push(neighbor)
        } else if (visited[neighbor] !== neighborColor) {
          return false
        }
      }
    }
  }
  return true // 遍历完所有顶点，没有发现哪里不对
}

// @lc code=end

isBipartite([
  [1, 3],
  [0, 2],
  [1, 3],
  [0, 2]
])
