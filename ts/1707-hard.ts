/*
 * @lc app=leetcode.cn id=1707 lang=typescript
 *
 * [1707] 与数组中元素的最大异或值
 */


// @lc code=start

// class TrieNode {
//   next: any
//   isEnd: boolean
//   constructor() {
//     this.next = {}
//     this.isEnd = false
//   }
// }

// class Trie {
//   root: TrieNode
//   constructor() {
//     this.root = new TrieNode()
//   }
//   insert(word: number): void {
//     let node = this.root
//     for (let i = 29; i >= 0; i--) {
//       const bit = (word >> i) & 1
//       if (!node.next[bit]) {
//         node.next[bit] = new TrieNode()
//       }
//       node = node.next[bit]
//     }
//     return
//   }
//   xor(word: number): number {
//     let count = 0
//     let node = this.root
//     for (let i = 29; i >= 0; i--) {
//       let bit = (word >> i) & 1
//       if (node.next[bit ^ 1]) {
//         count |= 1 << i
//         bit ^= 1
//       }
//       node = node.next[bit]
//     }
//     return count
//   }
// }

//参考--trie使用对象爆内存，使用数组代替

function maximizeXor(nums: number[], queries: number[][]): number[] {

  const trie: any = [null, null];
  const HIGH_BIT = 30;

  function insert(val: number) {
    // use node to keep track of the trie
    let node = trie;
    for (let i = HIGH_BIT - 1; i >= 0; --i) {
      const bit = (val >> i) & 1;
      if (node[bit] === null) {
        node[bit] = [null, null];
      }
      node = node[bit];
    }
  }

  function getMaxXor(val: number) {
    let ans = 0;
    let node = trie;
    for (let i = HIGH_BIT - 1; i >= 0; --i) {
      let bit = (val >> i) & 1;
      if (node[bit ^ 1] !== null) {
        ans |= 1 << i;
        bit ^= 1;
      }
      node = node[bit];
    }
    return ans;
  }

  const Len = nums.length
  nums.sort((a, b) => a - b)
  const temp = []
  for (let i = 0; i < queries.length; i++) {
    temp.push([...queries[i], i])
  }
  temp.sort((a, b) => a[1] - b[1])
  let res = []
  let index = 0
  for (const query of temp) {
    const [x, m, pid] = query
    while (index < Len && nums[index] <= m) {
      insert(nums[index++])
    }
    res[pid] = index === 0 ? -1 : getMaxXor(x)
  }
  return res
};
// @lc code=end

//11
maximizeXor([5, 8, 0, 3, 2, 10, 9, 2, 4, 5]
  , [[3, 8]]
)

maximizeXor([0, 1, 2, 3, 4], [[3, 1], [1, 3], [5, 6]])