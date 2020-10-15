/*
 * @lc app=leetcode.cn id=464 lang=typescript
 *
 * [464] 我能赢吗
 */

// @lc code=start
//参考--状压dp--DFS--二进制01代表是否选取
function canIWin(maxChoosableInteger: number,desiredTotal: number): boolean {
  // 直接获胜
  if (maxChoosableInteger >= desiredTotal) return true;
  // 全部拿完也无法到达
  var sum = maxChoosableInteger * (maxChoosableInteger + 1) / 2;
  if (desiredTotal > sum) return false;

  const map = new Map()

  const dfs = function (total: number, state: number): boolean {

    if (map.has(state)) return map.get(state)

    for (let i = 1; i <= maxChoosableInteger; i++) {
      const curr = 1 << i
      if (state & curr) continue

      if (i >= total || !dfs(total - i, state | curr)) {
        map.set(state, true)
        return true
      }
    }
    map.set(state, false)
    return false
  }

  return dfs(desiredTotal, 0)
};


// @lc code=end
//true
console.log(canIWin(18, 79))

//true
console.log(canIWin(4, 6))

//true
console.log(canIWin(10, 0))

//false
console.log(canIWin(10, 11))