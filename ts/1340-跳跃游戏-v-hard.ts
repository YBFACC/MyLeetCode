/*
 * @lc app=leetcode.cn id=1340 lang=typescript
 *
 * [1340] 跳跃游戏 V
 */

// @lc code=start
//自己--DFS+memo
function maxJumps(arr: number[], d: number): number {
  const Len = arr.length
  const map = new Map()
  let res = 0
  for (let i = 0; i < Len; i++) {
    res = Math.max(res, dfs(i) + 1)
  }

  return res

  function dfs(index: number): number {
    const currValue = arr[index]
    const path = index
    if (map.has(path)) return map.get(path)
    let floor = 0
    let up = true
    let down = true
    for (let i = 1; i <= d; i++) {
      if (up && index + i < Len && arr[index + i] < currValue) {
        floor = Math.max(floor, dfs(index + i) + 1)
      } else {
        up = false
      }
      if (down && index - i >= 0 && arr[index - i] < currValue) {
        floor = Math.max(floor, dfs(index - i) + 1)
      } else {
        down = false
      }
    }
    map.set(path, floor)
    return floor
  }
};


// @lc code=end
//2
maxJumps([7, 1, 7, 1, 7, 1], 2)
//7
maxJumps([7, 6, 5, 4, 3, 2, 1], 1)
//4
maxJumps([6, 4, 14, 6, 8, 13, 9, 7, 10, 6, 12], 2)
//1
maxJumps([3, 3, 3, 3, 3], 3)