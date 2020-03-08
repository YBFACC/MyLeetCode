/*
 * @lc app=leetcode.cn id=637 lang=javascript
 *
 * [637] 二叉树的层平均值
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
 * 自己--bfs--102变体--性能差
 * @param {TreeNode} root
 * @return {number[]}
 */
var averageOfLevels = function(root) {
  let temp = []
  let res = []
  const func = function(root, index, res) {
    if (root === null) return
    if (typeof res[index] === 'undefined') {
      res.push([root.val])
    } else {
      res[index].push(root.val)
    }

    func(root.left, index + 1, res)
    func(root.right, index + 1, res)
  }
  func(root, 0, res)
  res.forEach(item => {
    let count = 0
    item.forEach(e => {
      count += e
    })
    temp.push(count / item.length)
  })
  return temp
}


// @lc code=end

/**
 * copy--另一种bfs方式
 * @param {TreeNode} root
 * @return {number[]}
 */
var averageOfLevels = function(root) {
  let res = []
  if (!root) return res
  let queue = [root]
  console.log(queue)

  while (queue.length) {
    let length = queue.length
    let sum = 0
    for (let i = 0; i < length; i++) {
      let node = queue.shift()
      sum += node.val
      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
    }
    res.push(sum / length)
  }
  return res
}
