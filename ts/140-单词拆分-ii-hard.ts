/*
 * @lc app=leetcode.cn id=140 lang=typescript
 *
 * [140] 单词拆分 II
 */

// @lc code=start
//参考--重做--DFS+memo
function wordBreak(s: string, wordDict: string[]): string[] {
  let min = Number.MAX_SAFE_INTEGER
  let max = Number.MIN_SAFE_INTEGER
  const set = new Set()
  const Len = s.length
  if (Len === 0) return []
  for (const word of wordDict) {
    set.add(word)
    max = Math.max(max, word.length)
    min = Math.min(min, word.length)
  }
  const memo = new Map()
  const dfs = function (index: number,): string[] {
    if (memo.has(index)) return memo.get(index)
    if (index >= Len) return []
    const floor = []
    for (let i = index + min; i <= index + max && i <= Len; i++) {
      const str = s.slice(index, i)
      if (set.has(str)) {
        let str_list = dfs(i)
        for (const item of str_list) {
          floor.push(str + ' ' + item)
        }
        if (i === Len) {
          floor.push(str)
          memo.set(index, floor)
          return floor
        }
      }
    }
    memo.set(index, floor)
    return floor
  }
  return dfs(0)
};
// @lc code=end

console.log(wordBreak("catsanddog", ["cat", "cats", "and", "sand", "dog"]))