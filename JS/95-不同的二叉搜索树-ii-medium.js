/*
 * @lc app=leetcode.cn id=95 lang=javascript
 *
 * [95] 不同的二叉搜索树 II
 */

// @lc code=start

/**
 * 参考--重做--不断插入新节点
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function (n) {
  if (n === 0) return []
  if (n === 1) return [new TreeNode(1)]
  let res = [new TreeNode(1), new TreeNode(2)]
  res[0].right = new TreeNode(2)
  res[1].left = new TreeNode(1)
  let index = 3
  while (index <= n) {
    const cache = []
    res.forEach(item => {
      const newRoot = new TreeNode(index)
      newRoot.left = item
      cache.push(newRoot)
      let father = item
      while (father) {
        const _copy = copy(item)
        let temp = _copy

        while (temp) {
          if (temp.val === father.val) {
            const newIndex = new TreeNode(index)
            ;[temp.right, newIndex.left] = [newIndex, temp.right]
            break
          }
          temp = temp.right
        }
        cache.push(_copy)
        father = father.right
      }
    })
    res = cache
    index++
  }
  return res
}
function copy(node) {
  if (!node) return null
  const root = new TreeNode(node.val)
  root.left = copy(node.left)
  root.right = copy(node.right)
  return root
}

// @lc code=end

function TreeNode(val) {
  this.val = val
  this.left = this.right = null
}

generateTrees(2)
