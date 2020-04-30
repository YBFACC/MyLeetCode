/*
 * @lc app=leetcode.cn id=889 lang=javascript
 *
 * [889] 根据前序和后序遍历构造二叉树
 */

// @lc code=start

/**
 * 参考--没有中序有点蒙蔽
 * @param {number[]} pre
 * @param {number[]} post
 * @return {TreeNode}
 */
var constructFromPrePost = function (pre, post) {
  if (pre.length === 0) return null
  if (pre.length === 1) return new TreeNode(pre[0])

  let root = new TreeNode(pre.shift())
  post.pop()
  let mid = pre.indexOf(post[post.length - 1])
  root.left = constructFromPrePost(pre.slice(0, mid), post.slice(0, mid))
  root.right = constructFromPrePost(pre.slice(mid), post.slice(mid))
  return root
}
// @lc code=end

function TreeNode(val) {
  this.val = val
  this.left = this.right = null
}

constructFromPrePost([1, 2, 4, 5, 3, 6, 7], [4, 5, 2, 6, 7, 3, 1])
