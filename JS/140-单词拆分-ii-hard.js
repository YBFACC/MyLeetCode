/*
 * @lc app=leetcode.cn id=140 lang=javascript
 *
 * [140] 单词拆分 II
 */

// @lc code=start
/**
 * 参考--回溯+记忆化--trie感觉不需要
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
var wordBreak = function (s, wordDict) {
  if (!s || wordDict.length === 0) return []

  let min = Number.MAX_SAFE_INTEGER
  let max = Number.MIN_SAFE_INTEGER
  const trie = new Trie()
  for (const word of wordDict) {
    trie.insert(word)
    min = Math.min(min, word.length)
    max = Math.max(max, word.length)
  }

  const map = new Map()
  const dfs = function (index) {
    if (map.has(index)) {
      return map.get(index)
    }
    if (index === s.length) return []
    const list = []
    for (let i = index + min; i <= s.length && i <= index + max; i++) {
      const str = s.slice(index, i)
      if (trie.search(str)) {
        const memo_list = dfs(i)
        for (const temp of memo_list) {
          list.push(str + ' ' + temp)
        }
        if (i === s.length) {
          list.push(str)
          map.set(index, list)
          return list
        }
      }
    }
    map.set(index, list)
    return list
  }

  return dfs(0)
}

class Trie {
  constructor() {
    this.root = new TrieNode()
  }
  insert(word) {
    if (!word) return
    let node = this.root
    for (let i = 0; i < word.length; i++) {
      if (!node.next[word[i]]) {
        node.next[word[i]] = new TrieNode()
      }
      node = node.next[word[i]]
    }
    node.isEnd = true
  }
  search(word) {
    if (!word) return
    let node = this.root
    for (let i = 0; i < word.length; i++) {
      if (!node.next[word[i]]) {
        return false
      }
      node = node.next[word[i]]
    }
    return node.isEnd
  }
}
class TrieNode {
  constructor() {
    this.next = {}
    this.isEnd = false
  }
}
// @lc code=end
console.log(wordBreak('catsandog', ['cats', 'dog', 'sand', 'and', 'cat']))
