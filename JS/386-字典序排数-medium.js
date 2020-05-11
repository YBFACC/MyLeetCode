/*
 * @lc app=leetcode.cn id=386 lang=javascript
 *
 * [386] 字典序排数
 */

// @lc code=start
/**
 * 自己--字典树--性能差
 * @param {number} n
 * @return {number[]}
 */
var lexicalOrder = function (n) {
  if (n < 2) return ['1']
  let trie = new Trie()
  let res = []
  for (let i = 1; i <= n; i++) {
    trie.insert(i)
  }
  trie.search(res)
  return res
}

function Trie() {
  this.root = new trieNode()
}
function trieNode() {
  this.next = {}
  this.isEnd = false
  this.value = null
}
Trie.prototype.insert = function (num) {
  let word = `${num}`
  let node = this.root

  for (let i = 0; i < word.length; i++) {
    if (!node.next[word[i]]) {
      node.next[word[i]] = new trieNode()
    }
    node = node.next[word[i]]
  }
  node.isEnd = true
  node.value = num
  return
}
Trie.prototype.search = function (res) {
  return this.dfs(this.root, res)
}
Trie.prototype.dfs = function (node, res) {
  if (!node) return
  const keys = Reflect.ownKeys(node.next)
  //keys.sort((a, b) => parseInt(a, 10) - parseInt(b, 10))不用排序
  for (const key of keys) {
    if (node.next[key].isEnd) {
      res.push(node.next[key].value)
    }
    this.dfs(node.next[key], res)
  }
  return
}

// @lc code=end

lexicalOrder(13)
