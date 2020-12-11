/*
 * @lc app=leetcode.cn id=649 lang=typescript
 *
 * [649] Dota2 参议院
 */
import { AVLTree, Heap, TreeNode, ListNode, RunScript, Node, SegmentTree } from 'lc-tool';

//自己--循环队列+贪心

// @lc code=start
function predictPartyVictory(senate: string): string {
  let R_all = new Heap<number>()
  let D_all = new Heap<number>()
  const Len = senate.length
  for (let i = 0; i < Len; i++) {
    if (senate[i] === "R") {
      R_all.insert(i)
    } else {
      D_all.insert(i)
    }
  }

  while (!R_all.isEmpty() && !D_all.isEmpty()) {
    const R_temp = new Heap<number>()
    const D_temp = new Heap<number>()
    while (!R_all.isEmpty() || !D_all.isEmpty()) {
      const r = R_all.extract()
      const d = D_all.extract()
      if (r === null) {
        if (R_temp.length === 0) return "Dire"
        R_temp.extract()
        D_temp.insert(d as number)
      } else if (d === null) {
        if (D_temp.length === 0) return "Radiant"
        D_temp.extract()
        R_temp.insert(r as number)
      } else {
        if (r < d) {
          R_temp.insert(r)
        } else {
          D_temp.insert(d)
        }
      }
    }
    R_all = R_temp
    D_all = D_temp
  }

  return R_all.length > 0 ? "Radiant" : "Dire"
};
// @lc code=end

console.log(predictPartyVictory("DDRRRR"))