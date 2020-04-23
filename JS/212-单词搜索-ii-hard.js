/*
 * @lc app=leetcode.cn id=212 lang=javascript
 *
 * [212] 单词搜索 II
 */

// @lc code=start
/**
 * 自己--trie-dfs-递归-Reflect.ownKeys--性能好
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (board, words) {
  if (board.length === 0 || words.length === 0) return []
  let res = new Set()
  let trie = new Trie()
  for (const word of words) {
    trie.insert(word)
  }
  let row = board.length
  let col = board[0].length
  let keys = Reflect.ownKeys(trie.root.next)
  let ways = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1]
  ]
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (keys.includes(board[i][j])) {
        let temp = board[i][j]
        board[i][j] = '.'
        dfs(i, j, trie.root.next[temp], ways)
        board[i][j] = temp
      }
    }
  }

  function dfs(i, j, node, ways) {
    if (!node) return
    if (node.isEnd) {
      res.add(node.value)
    }
    let keys = Reflect.ownKeys(node.next)

    for (const [k, v] of ways) {
      let r = i + k
      let c = j + v
      if (r < 0 || r >= row || c < 0 || c >= col || !keys.includes(board[r][c]))
        continue
      let temp = board[r][c]
      board[r][c] = '.'
      dfs(r, c, node.next[temp], ways)
      board[r][c] = temp
    }
  }
  return [...res]
}

var TrieNode = function () {
  this.next = {}
  this.isEnd = false
  this.value = null
}
/**
 * Initialize your data structure here.
 */
var Trie = function () {
  this.root = new TrieNode()
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
  node.isEnd = true
  node.value = word
  return
}

// @lc code=end

console.log(
  findWords(
    [
      ['a', 'b'],
      ['a', 'a']
    ],
    ['aba', 'baa', 'bab', 'aaab', 'aaa', 'aaaa', 'aaba']
  )
)
