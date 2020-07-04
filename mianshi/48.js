/**
 * 自己--滑动窗口法
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let set = new Set()
  let left = 0
  let right = 0
  let res = 0
  while (right < s.length) {
    if (set.has(s[right])) {
      while (left < right) {
        set.delete(s[left])
        left++
        if (s[left - 1] === s[right]) break
      }
    }
    set.add(s[right])
    res = Math.max(res, set.size)

    right++
  }

  return res
}

lengthOfLongestSubstring('dvdf')
