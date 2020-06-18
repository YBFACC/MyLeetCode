/*
 * @lc app=leetcode.cn id=1028 lang=javascript
 *
 * [1028] 从先序遍历还原二叉树
 */

// @lc code=start

/**
 * 自己--先顺遍历
 * @param {string} S
 * @return {TreeNode}
 */
var recoverFromPreorder = function (S) {
  if (S.length === 0) return null
  function func(index) {
    if (S.length == 0) return null
    let all = S.match(/^(\-*)(\d+)/)
    if (index > all[1].length) return null

    let root = new TreeNode(parseInt(all[2], 10))
    S = S.slice(all[1].length + all[2].length)
    root.left = func(index + 1)
    root.right = func(index + 1)
    return root
  }
  let num = S.match(/^\d+/)[0]
  let root = new TreeNode(parseInt(num, 10))
  S = S.slice(num.length)
  root.left = func(1)
  root.right = func(1)
  return root
}
// @lc code=end

let a = recoverFromPreorder('1-401--349---90--88')

return

function TreeNode(val) {
  this.val = val
  this.left = this.right = null
}
