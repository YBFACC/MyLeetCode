/*
 * @lc app=leetcode.cn id=1104 lang=javascript
 *
 * [1104] 二叉树寻路
 */

// @lc code=start
/**
 * 参考--从下往上推--利用二叉树的性质
 * @param {number} label
 * @return {number[]}
 */
var pathInZigZagTree = function (label) {
  let depth = Math.floor(Math.log2(label))
  let res = [label]

  while (depth > 0) {
    let old_father = Math.floor(label / 2)
    if (old_father < 1) break
    let new_father = 2 ** depth - 1 - old_father + 2 ** (depth - 1)
    res.unshift(new_father)
    label = new_father
    depth--
  }

  return res
}

// @lc code=end

pathInZigZagTree(14)
