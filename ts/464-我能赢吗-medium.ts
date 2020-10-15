/*
 * @lc app=leetcode.cn id=464 lang=typescript
 *
 * [464] 我能赢吗
 */

// @lc code=start
//参考--回溯+memo--耗时比状压高
function canIWin(maxChoosableInteger: number, desiredTotal: number): boolean {
  // 直接获胜
  if (maxChoosableInteger >= desiredTotal) return true;
  // 全部拿完也无法到达
  var sum = maxChoosableInteger * (maxChoosableInteger + 1) / 2;
  if (desiredTotal > sum) return false;

  const memo = new Int16Array(maxChoosableInteger + 1)
  const map = new Map()
  const dfs = function (sum: number,): boolean {
    const path = memo.join()
    if (map.has(path)) return map.get(path)
    for (let i = 1; i <= maxChoosableInteger; i++) {
      if (memo[i]) continue
      if (i + sum >= desiredTotal) {
        return true
      }
      memo[i] = 1
      if (!dfs(sum + i)) {
        map.set(path, true)
        memo[i] = 0
        return true
      }
      memo[i] = 0
    }
    map.set(path, false)
    return false
  }

  return dfs(0)
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