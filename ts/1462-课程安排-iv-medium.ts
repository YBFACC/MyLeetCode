/*
 * @lc app=leetcode.cn id=1462 lang=typescript
 *
 * [1462] 课程安排 IV
 */
// @lc code=start

//参考--Floyd算法
function checkIfPrerequisite(n: number, prerequisites: number[][], queries: number[][]): boolean[] {
  const Len = n
  const dp = Array.from({ length: Len }, () => Array.from({ length: Len }, () => false))

  for (const [from, to] of prerequisites) {
    dp[from][to] = true
  }

  for (let k = 0; k < Len; k++) {
    for (let i = 0; i < Len; i++) {
      for (let j = 0; j < Len; j++) {
        dp[i][j] = dp[i][j] || (dp[i][k] && dp[k][j])
      }
    }
  }

  return queries.map((item) => {
    const [from, to] = item
    return dp[from][to]
  })
}

// @lc code=end

console.log(checkIfPrerequisite(4
  , [[2, 3], [2, 1], [0, 3], [0, 1]]
  , [[0, 1], [0, 3], [2, 3], [3, 0], [2, 0], [0, 2]])
)
console.log(checkIfPrerequisite(5, [[0, 1], [1, 2], [2, 3], [3, 4]], [[0, 4], [4, 0], [1, 3], [3, 0]]))

checkIfPrerequisite(3, [[1, 2], [1, 0], [2, 0]], [[1, 0], [1, 2]])
