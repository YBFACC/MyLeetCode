/*
 * @lc app=leetcode.cn id=235 lang=javascript
 *
 * [235] 二叉搜索树的最近公共祖先
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
 * 自己--回溯法--注意形参的类型--性能差
 *
 * 看题解后：注意这是二叉搜索树有以下特点🚀🚀🚀🚀
 * 节点左子树上的所有节点的值都小于等于节点的值
 * 节点右子树上的所有节点的值都大于等于节点的值
 * 左子树和右子树也都是BST
 *
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
  let arrP = []
  let arrQ = []
  let findP = false
  let findQ = false
  const func = function(root) {
    if (root === null) {
      return
    }
    if (root.val === p.val) {
      findP = true
      arrP.push(root)
    } else if (root.val === q.val) {
      findQ = true
      arrQ.push(root)
    }
    if (!findP) {
      arrP.push(root)
    }
    if (!findQ) {
      arrQ.push(root)
    }
    func(root.left)
    func(root.right)
    if (!findP) {
      arrP.pop()
    }
    if (!findQ) {
      arrQ.pop()
    }
  }
  func(root)
  let res
  for (let i = 0; i < arrP.length && i < arrQ.length; i++) {
    if (arrP[i].val === arrQ[i].val) {
      res = arrP[i]
    }
  }
  return res
}
// @lc code=end
