/*
 * @lc app=leetcode.cn id=559 lang=typescript
 *
 * [559] N叉树的最大深度
 */

// @lc code=start
/**
 * Definition for Node.
 * class Node {
 *     val: number
 *     children: Node[]
 *     constructor(val?: number, children?: Node[]) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.children = (children===undefined ? [] : children)
 *     }
 * }
 */
var maxDepth = function (root: Node) {
  if (!root) return 0
  if (!root.children) return 1
  let num = 0

  root.children.forEach(item => {
    num = Math.max(maxDepth(item), num)
  })

  return num + 1
}
// @lc code=end

