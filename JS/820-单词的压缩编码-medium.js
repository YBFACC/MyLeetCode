/*
 * @lc app=leetcode.cn id=820 lang=javascript
 *
 * [820] 单词的压缩编码
 */

// @lc code=start
/**
 * 参考--逆前缀树--性能一般
 * @param {string[]} words
 * @return {number}
 */
var minimumLengthEncoding = function (words) {
  if (words.length === 0) return 0
  let res = 0
  words.sort((a, b) => b.length - a.length)
  let trie = new Trie()
  for (let i = 0; i < words.length; i++) {
    if (!trie.startsWith(words[i])) {
      res += words[i].length + 1
      trie.insert(words[i])
    }
  }
  return res
}

var Trie = function () {
  this.root = new TrieNode()
}
var TrieNode = function () {
  this.next = {}
  this.isEnd = false
}
Trie.prototype.insert = function (word) {
  if (!word) return
  let node = this.root
  for (let i = word.length - 1; i >= 0; i--) {
    if (!node.next[word[i]]) {
      node.next[word[i]] = new TrieNode()
    }
    node = node.next[word[i]]
  }
  node.isEnd = true
  return
}
Trie.prototype.startsWith = function (prefix) {
  if (!prefix) return true
  let node = this.root

  for (let i = prefix.length - 1; i >= 0; i--) {
    if (node.next[prefix[i]]) {
      node = node.next[prefix[i]]
    } else {
      return false
    }
  }
  return true
}
// @lc code=end

minimumLengthEncoding(['time', 'me', 'bell'])
