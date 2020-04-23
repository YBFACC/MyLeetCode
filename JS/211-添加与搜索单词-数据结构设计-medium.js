/*
 * @lc app=leetcode.cn id=211 lang=javascript
 *
 * [211] 添加与搜索单词 - 数据结构设计
 */

// @lc code=start
//参考--设计trie--Reflect获取key--js原型链的操作
var trie = function () {
  this.next = {}
  this.isEnd = false
}
/**
 * Initialize your data structure here.
 */
var WordDictionary = function () {
  this.root = new trie()
}

/**
 * Adds a word into the data structure.
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function (word) {
  if (!word) return

  let node = this.root
  for (let i = 0; i < word.length; i++) {
    if (!node.next[word[i]]) {
      node.next[word[i]] = new trie()
    }
    node = node.next[word[i]]
  }
  node.isEnd = true;
  return
}

/**
 * Returns if the word is in the data structure. A word could contain the dot character '.' to represent any one letter.
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function (word) {
  if (!word.length) return false

  return this.dfs(this.root, word)
}

WordDictionary.prototype.dfs = function (root, word) {
  let node = root
  for (let i = 0; i < word.length; i++) {
    if (word[i] === '.') {
      const keys = Reflect.ownKeys(node.next)
      for (const key of keys) {
        const res = this.dfs(node.next[key], word.slice(i + 1))
        if (res) return true
      }
      return false
    }
    if (!node.next[word[i]]) {
      return false
    }
    node = node.next[word[i]]
  }

  return node.isEnd
}

/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */
// @lc code=end
