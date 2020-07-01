const { TreeNode } = require('../LeetCode-Class/index.js')

/**
 * 自己--dfs遍历树
 * @param {TreeNode} A
 * @param {TreeNode} B
 * @return {boolean}
 */
var isSubStructure = function (A, B) {
  if (!A || !B) return false

  if (A.val === B.val) {
    return (
      isSubStructure(A.left, B) ||
      isSubStructure(A.right, B) ||
      _isSubStructure(A, B)
    )
  } else {
    return isSubStructure(A.left, B) || isSubStructure(A.right, B)
  }
}

function _isSubStructure(A, B) {
  if (!B) return true
  if (!A) return false

  return (
    A.val === B.val &&
    _isSubStructure(A.left, B.left) &&
    _isSubStructure(A.right, B.right)
  )
}

let a = TreeNode.create([4, 2, 3, 4, 5, 6, 7, 8, 9])
let b = TreeNode.create([4, 8, 9])

console.log(isSubStructure(a, b))
