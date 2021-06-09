/*
 * @lc app=leetcode.cn id=523 lang=typescript
 *
 * [523] 连续的子数组和
 */

//自己--前缀和，是否出现相同余数
//注意：双0子串出现
//类似525的前缀和

// @lc code=start
function checkSubarraySum(nums: number[], k: number): boolean {
  const temp = nums.map((v) => v % k)
  const map = new Map()
  map.set(0, -1)
  const Len = nums.length
  let count = 0
  let two_zore = 0
  for (let i = 0; i < Len; i++) {
    if (temp[i] === 0) {
      two_zore++
      if (two_zore === 2) return true
      continue
    }
    two_zore = 0
    count += temp[i]
    count %= k
    if (map.has(count)) {
      return true
    }
    map.set(count, i)
  }
  return false
};
// @lc code=end

console.log(checkSubarraySum([5, 0, 0, 0], 3))