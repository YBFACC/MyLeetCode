/*
 * @lc app=leetcode.cn id=95 lang=javascript
 *
 * [95] 不同的二叉搜索树 II
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
 * copy--看了个大概好复杂
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function(n) {
  if (n === 0) return []
  if (n === 1) return [new TreeNode(1)]
  let res = [new TreeNode(1), new TreeNode(2)]
  res[0].right = new TreeNode(2)
  res[1].left = new TreeNode(1)
  let num = 3
  while (num <= n) {
      let cache = []
      res.forEach(root => {
          let newRoot = new TreeNode(num)
          newRoot.left = root
          cache.push(newRoot)
          let node = root
          while (node) {
              newN = new TreeNode(num)
              let newNode = new TreeNode(node.val)
              newNode.left = node.left
              newNode.right = newN
              newN.left = node.right
              let newRoot = node === root ? newNode : copyTree(root, newNode)
              cache.push(newRoot)
              node = node.right
          }
      })
      res = cache
      num++
  }
  return res

  function copyTree(root, target) {
      let res = new TreeNode(root.val), parent = res
      while (root.right) {
          let node = new TreeNode(root.right.val)
          if (root.right.val === target.val) {
              parent.right = target
              parent.left = root.left
              break
          }
          parent.right = node
          parent.left = root.left
          parent = node
          root = root.right
      }
      return  res
  }
};

// @lc code=end

