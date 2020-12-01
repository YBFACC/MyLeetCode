/*
 * @lc app=leetcode.cn id=948 lang=typescript
 *
 * [948] 令牌放置
 */

import { AVLTree, Heap, TreeNode, ListNode, RunScript, Node, SegmentTree } from 'lc-tool';

//提示--不能负分--贪心

// @lc code=start
type item = [number, number]

function bagOfTokensScore(tokens: number[], P: number): number {
  const max = new Heap<item>([], (a: item, b: item) => {
    if (a[1] === b[1]) {
      return a[0] >= b[0]
    }
    return a[1] <= b[1]
  })
  const min = new Heap<item>([], (a: item, b: item) => {
    if (a[1] === b[1]) {
      return a[0] >= b[0]
    }
    return a[1] >= b[1]
  })
  for (let i = 0; i < tokens.length; i++) {
    max.insert([i, tokens[i]])
    min.insert([i, tokens[i]])
  }
  let res = 0
  const set = new Set()
  let temp = 0
  while (!max.isEmpty() && !min.isEmpty()) {
    while (!min.isEmpty()) {
      const curr = min.extract() as item
      if (set.has(curr[0])) continue
      if (P >= curr[1]) {
        P -= curr[1]
        set.add(curr[0])
        temp++
      } else {
        min.insert(curr)
        break
      }
    }
    res = Math.max(res, temp)
    if (!max.isEmpty() && temp > 0) {
      const curr = max.extract() as item
      if (set.has(curr[0])) continue
      P += curr[1]
      set.add(curr[0])
      temp--
    } else {
      break
    }
  }

  return res
};
// @lc code=end
//0
bagOfTokensScore([71, 55, 82], 54)

bagOfTokensScore([100, 200], 150)
//2
bagOfTokensScore([100, 200, 300, 400], 200)