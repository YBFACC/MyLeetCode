/*
 * @lc app=leetcode.cn id=30 lang=javascript
 *
 * [30] 串联所有单词的子串
 */

const _ = require('lodash')

// @lc code=start
var findSubstring = function(s, words) {

};
// @lc code=end

findSubstring('wordgoodgoodgoodbestword', ['word', 'good', 'best', 'word'])


/**
 * 自己--trie超时
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
// var findSubstring = function (s, words) {
//   if (s.length === 0 || words.length === 0) return []
//   let trie = new Trie()
//   let res = []
//   for (const word of words) {
//     trie.insert(word)
//   }

//   let arr_len = words.length
//   let item_len = words[0].length
//   let len = arr_len * item_len

//   for (let i = 0; i + len <= s.length; i++) {
//     let temp = JSON.parse(JSON.stringify(trie))
//     temp.__proto__ = trie.__proto__
//     let str = s.slice(i, i + len)
//     if (temp.search(str, item_len)) {
//       res.push(i)
//     }
//   }
//   return res
// }
var Trie = function () {
  this.root = new TrieNode()
}

var TrieNode = function () {
  this.next = {}
  this.isEnd = false
  this.num = 0
}
Trie.prototype.insert = function (word) {
  if (!word) return

  let node = this.root
  for (let i = 0; i < word.length; i++) {
    if (!node.next[word[i]]) {
      node.next[word[i]] = new TrieNode()
    }
    node = node.next[word[i]]
  }
  node.num++
  node.isEnd = true
  return
}

Trie.prototype.search = function (str, item_len) {
  for (let i = 0; i < str.length; i += item_len) {
    let item = str.slice(i, i + item_len)
    if (!this.dfs(item)) {
      return false
    }
  }
  return true
}
Trie.prototype.dfs = function (word) {
  if (!word) return false
  let node = this.root

  for (let i = 0; i < word.length; i++) {
    if (node.next[word[i]]) {
      node = node.next[word[i]]
    } else {
      return false
    }
  }
  if (node.num > 0 && node.isEnd) {
    node.num--
    return true
  } else {
    return false
  }
}