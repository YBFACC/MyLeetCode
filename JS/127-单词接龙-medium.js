/*
 * @lc app=leetcode.cn id=127 lang=javascript
 *
 * [127] 单词接龙
 */

// @lc code=start
/**
 * 参考--无向图+bfs-始端搜索
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function (beginWord, endWord, wordList) {
  if (wordList.length === 0 || !beginWord || !endWord) return 0

  let map = new Map()

  for (const word of wordList) {
    for (let i = 0; i < word.length; i++) {
      let temp = word.slice(0, i) + '*' + word.slice(i + 1)
      if (map.has(temp)) {
        let value = map.get(temp)
        value.push(word)
        map.set(temp, value.slice())
      } else {
        map.set(temp, [word])
      }
    }
  }

  const useIt = {}
  let queue = [[beginWord, 1]]

  while (queue.length > 0) {
    let curr = queue.shift()
    let oldWord = curr[0]
    let level = curr[1]
    for (let i = 0; i < oldWord.length; i++) {
      let temp = oldWord.slice(0, i) + '*' + oldWord.slice(i + 1)
      if (map.has(temp)) {
        let value = map.get(temp)
        for (const item of value) {
          if (item === endWord) {
            return level + 1
          }
          if (!useIt[item]) {
            useIt[item] = true
            queue.push([item, level + 1])
          }
        }
      }
    }
  }

  return 0
}

// @lc code=end

console.log(
  ladderLength('hit', 'cog', ['hot', 'dot', 'dog', 'lot', 'log', 'cog'])
)
