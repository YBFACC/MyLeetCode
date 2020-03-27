/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

function TreeNode(val) {
  this.val = val
  this.left = this.right = null
}
/**
 * 自己--递归生成二叉树--JS/105题
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
  const func = function(pre, ino) {
    if (ino.length === 0 || pre.length === 0) return null
    let root = new TreeNode(pre[0])
    let index = ino.indexOf(pre.shift())
    root.left = func(pre.slice(0, index), ino.slice(0, index))
    root.right = func(pre.slice(index), ino.slice(index + 1))
    console.log(root)
    return root
  }
  let res = func(preorder, inorder)
  return res
}

buildTree([3, 9, 20, 15, 7], [9, 3, 15, 20, 7])
// let a1 = TreeNode(3)
// let a2 = TreeNode(9)
// let a3 = TreeNode(20)
// let a4 = TreeNode(15)
// let a5 = TreeNode(7)

// a1.left = a2
// a1.right = a3
// a3.left = a4
// a3.right = a5
