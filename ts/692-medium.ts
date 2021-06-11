/*
 * @lc app=leetcode.cn id=692 lang=typescript
 *
 * [692] 前K个高频单词
 */

//自己--hash表统计+大根堆

import { AVLTree, Heap, TreeNode, ListNode, RunScript, Node, SegmentTree } from 'lc-tool';
// @lc code=start

interface obj {
  name: string
  val: number
}

function topKFrequent(words: string[], k: number): string[] {
  let res = []
  const map = new Map()
  for (const word of words) {
    map.set(word, map.has(word) ? map.get(word) + 1 : 1)
  }

  const heap = new Heap<obj>([], (a: obj, b: obj) => {
    if (a.val === b.val) {
      return a.name > b.name
    }
    return a.val < b.val
  })

  map.forEach((v, k) => {
    heap.insert({
      name: k,
      val: v
    })
  })

  while (k-- > 0) {
    const temp = heap.extract()
    if (temp) {
      res.push(temp.name)
    }
  }

  return res
};
// @lc code=end

topKFrequent(["i", "love", "leetcode", "i", "love", "coding"]
  , 3
)