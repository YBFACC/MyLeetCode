/*
 * @lc app=leetcode.cn id=113 lang=javascript
 *
 * [113] 路径总和 II
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 *  自己--回溯--性能棒🚀🚀🚀
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number[][]}
 */
var pathSum = function(root, sum) {
  if (!root) return []
  if (root.val === sum && !root.left && !root.right) return [[sum]]
  let arr = []
  const func = function(root, count, list) {
    if (!root) return

    list.push(root.val)
    count = count + root.val

    if (count === sum && !root.left && !root.right) {
      arr.push(list.slice())
    }

    func(root.left, count, list)
    func(root.right, count, list)

    list.pop()
    count = count - root.val
  }
  func(root.left, root.val, [root.val])
  func(root.right, root.val, [root.val])
  return arr
}
// @lc code=end
