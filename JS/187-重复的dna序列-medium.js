/*
 * @lc app=leetcode.cn id=187 lang=javascript
 *
 * [187] 重复的DNA序列
 */

// @lc code=start
/**
 * 自己--字典树--性能差
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function (s) {
  if (s.length < 10) return []
  let res = []
  let trie = new Trie()
  for (let i = 0; i <= s.length - 10; i++) {
    let item = s.slice(i, i + 10)
    if (trie.insert(item)) {
      res.push(item)
    }
  }
  return [...new Set(res)]
}
var Trie = function () {
  this.root = new TrieNode()
}
var TrieNode = function () {
  this.next = {}
}
Trie.prototype.insert = function (word) {
  if (!word) return
  let node = this.root
  let _find = true//是否所有key都已注册
  for (let i = 0; i < word.length; i++) {
    if (!node.next[word[i]]) {
      node.next[word[i]] = new TrieNode()
      _find = false
    }
    node = node.next[word[i]]
  }
  //如果所有节点都通过,它是出现过都字符串
  return _find ? word : null
}
// @lc code=end

findRepeatedDnaSequences("AAAAAAAAAAA")