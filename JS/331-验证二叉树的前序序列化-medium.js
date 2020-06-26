/*
 * @lc app=leetcode.cn id=331 lang=javascript
 *
 * [331] 验证二叉树的前序序列化
 */

// @lc code=start
/**
 * 自己--模拟建树
 * @param {string} preorder
 * @return {boolean}
 */
var isValidSerialization = function (preorder) {
  if (preorder.length === 0) return true
  let list = preorder.split(',')
  let falsy = true

  const dfs = function () {
    if (list.length === 0) {
      falsy = false
      return
    }
    if (list[0] === '#') {
      list.shift()
      return null
    }
    let root = new TreeNode(list.shift())
    root.left = dfs()
    root.right = dfs()
    return root
  }
  dfs()
  return list.length === 0 && falsy
}

function TreeNode(val) {
  this.val = val
  this.left = this.right = null
}

// @lc code=end

console.log(isValidSerialization('9,#,#,1'))
