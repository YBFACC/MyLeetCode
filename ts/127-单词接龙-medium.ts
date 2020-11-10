/*
 * @lc app=leetcode.cn id=127 lang=typescript
 *
 * [127] 单词接龙
 */

//参考--重做--双向广搜

// @lc code=start
function ladderLength(beginWord: string, endWord: string, wordList: string[]): number {
  const allWordSet = new Set(wordList)
  if (!allWordSet.has(endWord)) {
    return 0
  }
  let beginSet: Set<string> = new Set()
  beginSet.add(beginWord)
  let endSet: Set<string> = new Set()
  endSet.add(endWord)
  let level = 1
  while (beginSet.size > 0) {
    const newSet: Set<string> = new Set()
    for (const word of beginSet) {
      for (let i = 0; i < word.length; i++) {
        for (let k = 97; k <= 123; k++) {
          const char = String.fromCharCode(k)
          if (char !== word[i]) {
            const str = word.slice(0, i) + char + word.slice(i + 1)
            if (endSet.has(str)) {
              return level + 1
            }
            if (allWordSet.has(str)) {
              newSet.add(str)
              allWordSet.delete(str)
            }
          }
        }
      }
    }
    beginSet = newSet
    level++
    if (beginSet.size > endSet.size) {
      [beginSet, endSet] = [endSet, beginSet]
    }
  }
  return 0
};
// @lc code=end
console.log(ladderLength("hit",
  "cog",
  ["hot", "dot", "dog", "lot", "log"])
)

console.log(ladderLength("hit",
  "cog",
  ["hot", "dot", "dog", "lot", "log", "cog"])
)
