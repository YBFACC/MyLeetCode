/*
 * @lc app=leetcode.cn id=205 lang=typescript
 *
 * [205] 同构字符串
 */

//自己--map即可

// @lc code=start
function isIsomorphic(s: string, t: string): boolean {
  return helper(s, t) && helper(t, s)
};
function helper(s: string, t: string): boolean {
  const map = new Map()
  for (let i = 0; i < s.length; i++) {
    if (map.has(s[i])) {
      if (map.get(s[i]) !== t[i]) {
        return false
      }
    } else {
      map.set(s[i], t[i])
    }
  }
  return true
}
// @lc code=end

