/*
 * @lc app=leetcode.cn id=1010 lang=typescript
 *
 * [1010] 总持续时间可被 60 整除的歌曲
 */

//自己--组合+余数

// @lc code=start
function numPairsDivisibleBy60(time: number[]): number {
  const map = new Map()
  for (const num of time) {
    const temp = num % 60
    map.set(temp, map.has(temp) ? map.get(temp) + 1 : 1)
  }
  let res = 0
  for (const [k, v] of map.entries()) {
    //0-60的处理
    const orther_k = 60 - (k === 0 ? 60 : k)
    if (!map.has(orther_k)) continue
    const orther_v = map.get(orther_k)
    if (k !== orther_k) {
      //1-59
      res += v * orther_v / 2
    } else if (v > 1) {
      //30-30
      res += v * (v - 1) / 2
    }
  }
  return res
};

// @lc code=end

numPairsDivisibleBy60([439, 407, 197, 191, 291, 486, 30, 307, 11])

numPairsDivisibleBy60([30, 20, 150, 100, 40])