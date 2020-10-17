/*
 * @lc app=leetcode.cn id=524 lang=typescript
 *
 * [524] 通过删除字母匹配到字典里最长单词
 */

// @lc code=start
//看提示--sort+双指针-比较是否包含子序列
function findLongestWord(s: string, d: string[]): string {
  d.sort((a, b) => {
    if (a.length === b.length) {
      return a > b ? 1 : -1
    }
    return b.length - a.length
  })
  for (const item of d) {
    if (helper(s, item)) {
      return item
    }
  }
  return ''
};
function helper(text: string, pattern: string): boolean {
  let t = 0
  let p = 0
  while (t < text.length && p < pattern.length) {
    if (text[t] === pattern[p]) {
      p++
    }
    t++
  }
  return p === pattern.length
}
// @lc code=end

console.log(findLongestWord("abpcplea", ["ale", "applw", "apple", "monkey", "plea"]))