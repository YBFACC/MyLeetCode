/*
 * @lc app=leetcode.cn id=76 lang=javascript
 *
 * [76] 最小覆盖子串
 */

// @lc code=start
/**
 * 参考--map统计+滑动窗口法
 * 自己一开始理解错误--每种字母个数必须是T中都个数
 * 只要字母每种个数大于要求都可以
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  if (s.length === 0) return ''
  let map = new Map()
  for (const item of t) {
    map.set(item, map.has(item) ? map.get(item) + 1 : 1)
  }
  let allType = map.size
  let curr = 0
  let pro = 0
  let res = null
  while (pro < s.length) {
    if (map.has(s[pro])) {
      map.set(s[pro], map.get(s[pro]) - 1)
      map.get(s[pro]) === 0 ? allType-- : null
    }
    if (allType === 0) {
      while (curr <= pro && allType <= 0) {
        if (map.has(s[curr])) {
          map.set(s[curr], map.get(s[curr]) + 1)
          map.get(s[curr]) > 0 ? allType++ : null
          let temp = s.slice(curr, pro + 1)
          if ((res && res.length > temp.length) || !res) {
            res = temp
          }
        }
        curr++
      }
    }
    pro++
  }
  return res ? res : ''
}
// @lc code=end

minWindow('ADOBECODEBANC', 'ABC')
