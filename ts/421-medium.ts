/*
 * @lc app=leetcode.cn id=421 lang=typescript
 *
 * [421] 数组中两个数的最大异或值
 */

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
  insert(word: number): void {
    let node = this.root
    for (let i = 31; i >= 0; i--) {
      const bit = (word >> i) & 1
      if (!node.next[bit]) {
        node.next[bit] = new TrieNode()
      }
      node = node.next[bit]
    }
    return
  }
  xor(word: number): number {
    let count = 0
    let node = this.root
    for (let i = 31; i >= 0; i--) {
      let bit = (word >> i) & 1
      if (node.next[bit ^ 1]) {
        count |= 1 << i
        bit ^= 1
      }
      node = node.next[bit]
    }
    return count
  }
}

//自己--字典树优化

function findMaximumXOR(nums: number[]): number {
  const trie = new Trie()
  let res = 0

  for (const num of nums) {
    trie.insert(num)
    res = Math.max(res, trie.xor(num))
  }

  return res
};
// @lc code=end

findMaximumXOR([3, 10, 5, 25, 2, 8])