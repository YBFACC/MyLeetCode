/*
 * @lc app=leetcode.cn id=208 lang=typescript
 *
 * [208] 实现 Trie (前缀树)
 */

//提示--前缀树的实现

import { AVLTree, Heap, TreeNode, ListNode, RunScript, Node, SegmentTree } from 'lc-tool';
// @lc code=start
class TrieNode {
  next: any
  isEnd: boolean
  constructor() {
    this.next = {}
    this.isEnd = false
  }
}

class Trie {
  root: TrieNode
  constructor() {
    this.root = new TrieNode()
  }

  insert(word: string): void {
    if (word.length === 0) return
    let node = this.root
    for (let i = 0; i < word.length; i++) {
      if (!node.next[word[i]]) {
        node.next[word[i]] = new TrieNode()
      }
      node = node.next[word[i]]
    }
    node.isEnd = true
    return
  }

  search(word: string): boolean {
    if (word.length === 0) return false
    let node = this.root
    for (let i = 0; i < word.length; i++) {
      if (node.next[word[i]]) {
        node = node.next[word[i]]
      } else {
        return false
      }
    }
    return node.isEnd
  }

  startsWith(prefix: string): boolean {
    if (prefix.length === 0) return true
    let node = this.root
    for (let i = 0; i < prefix.length; i++) {
      if (node.next[prefix[i]]) {
        node = node.next[prefix[i]]
      } else {
        return false
      }
    }
    return true
  }
}

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
// @lc code=end


RunScript(
  ["Trie", "search"],
  [[], ["a"]],
  Trie
)
RunScript(["Trie", "insert", "search", "search", "startsWith", "insert", "search"]
  , [[], ["apple"], ["apple"], ["app"], ["app"], ["app"], ["app"]],
  Trie)