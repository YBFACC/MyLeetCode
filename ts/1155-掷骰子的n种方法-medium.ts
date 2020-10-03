/*
 * @lc app=leetcode.cn id=1155 lang=typescript
 *
 * [1155] 掷骰子的N种方法
 */

// @lc code=start
//自己--矩阵快速幂--计算第d次时，出现的次数
function numRollsToTarget(d: number, f: number, target: number): number {
  let list = Array.from({ length: f + 1 }, () => 1)
  list[0] = 0
  for (let i = 1; i < d; i++) {
    const temp = []
    for (let j = 1; j < list.length; j++) {
      const num = list[j]
      if (!num) continue
      for (let k = 1; k <= f; k++) {
        if (!temp[j + k]) temp[j + k] = 0
        temp[j + k] += num % 1000000007
      }
    }
    list = temp
  }
  return list[target] ? list[target] % 1000000007 : 0
};
// @lc code=end

console.log(numRollsToTarget(1, 2, 3))