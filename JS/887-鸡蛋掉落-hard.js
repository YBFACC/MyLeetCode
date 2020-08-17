/*
 * @lc app=leetcode.cn id=887 lang=javascript
 *
 * [887] 鸡蛋掉落
 */

// @lc code=start
/**
 * 自己--通过不了
 * @param {number} K
 * @param {number} N
 * @return {number}
 */
var superEggDrop = function (K, N) {
  if (N === 0) return 0
  if (K === 1) return N
  const meno = new Map()
  const dfs = function (l, r, _k) {
    if (l > r) {
      return -Infinity
    }
    const str = `${l},${r}`
    if (meno.has(str)) return meno.get(str)
    if (_k === K) {
      let floor = r - l
      meno.set(str, floor)
      return floor
    }
    if (l === r) {
      return 1
    }
    if (r - l === 1 || r - l === 2) {
      return 2
    }
    let floor = N
    for (let i = l; i <= r; i++) {
      floor = Math.min(
        floor,
        Math.max(dfs(l, i, _k + 1), dfs(i + 1, r, _k)) + 1
      )
    }
    meno.set(str, floor)
    return floor
  }
  let res = dfs(1, N, 1)
  return res
}
// @lc code=end
console.log(superEggDrop(3, 15)) //5
console.log(superEggDrop(3, 3)) //2
console.log(superEggDrop(2, 100)) //14
console.log(superEggDrop(2, 9)) //4
console.log(superEggDrop(2, 7)) //4
console.log(superEggDrop(2, 1)) //1
console.log(superEggDrop(2, 2)) //2
console.log(superEggDrop(1, 4)) //4
console.log(superEggDrop(2, 4)) //3
console.log(superEggDrop(2, 6)) //3
