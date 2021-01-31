/*
 * @lc app=leetcode.cn id=1631 lang=typescript
 *
 * [1631] 最小体力消耗路径
 */

//参考--DFS+二分

// @lc code=start

function minimumEffortPath(heights: number[][]): number {
  const Rows = heights.length, Cols = heights[0].length
  const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]]
  let left = 0
  let right = 1000000
  
  while (left < right) {
    const mid = left + ((right - left) >> 1)
    if (dfs(0, 0, mid, new Set<string>())) {
      right = mid
    } else {
      left = mid + 1
    }
  }

  return left

  function dfs(x: number, y: number, mid: number, set: Set<string>): boolean {
    const Path = `${x}_${y}`
    if (x === Rows - 1 && y === Cols - 1) {
      return true
    }
    set.add(Path)
    for (const [_x, _y] of directions) {
      const newX = _x + x
      const newY = _y + y
      const newPath = `${newX}_${newY}`
      if (newX >= 0 && newX < Rows &&
        newY >= 0 && newY < Cols &&
        !set.has(newPath) &&
        Math.abs(heights[x][y] - heights[newX][newY]) <= mid
      ) {
        if (dfs(newX, newY, mid, set)) return true
      }
    }
    return false
  }
};
// @lc code=end
//1
console.log(minimumEffortPath([[1, 2, 3], [3, 8, 4], [5, 3, 5]]))
//5
console.log(minimumEffortPath([[4, 3, 4, 10, 5, 5, 9, 2], [10, 8, 2, 10, 9, 7, 5, 6], [5, 8, 10, 10, 10, 7, 4, 2], [5, 1, 3, 1, 1, 3, 1, 9], [6, 4, 10, 6, 10, 9, 4, 6]]))
//0
console.log(minimumEffortPath([[1, 2, 1, 1, 1], [1, 2, 1, 2, 1], [1, 2, 1, 2, 1], [1, 2, 1, 2, 1], [1, 1, 1, 2, 1]]))
//2
console.log(minimumEffortPath([[1, 2, 2], [3, 8, 2], [5, 3, 5]]))