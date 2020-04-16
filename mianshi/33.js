/**
 * 自己--递归二叉搜索树=>左<根<右--性能一般
 * @param {number[]} postorder
 * @return {boolean}
 */
var verifyPostorder = function (postorder) {
  if (postorder.length < 2) return true
  let root = postorder[postorder.length - 1]//找到根节点
  let index = postorder.findIndex((v) => v > root)//找到右子树的开始节点
  let left = postorder.slice(0, index)//划分左子树
  let right = postorder.slice(index, -1)//划分右子树
  return (
    verifyPostorder(left) &&
    verifyPostorder(right) &&
    left.every((v) => v < root) &&//左子树所有节点小于根节点
    right.every((v) => v > root)//右子树所有节点大于根节点
  )
}
