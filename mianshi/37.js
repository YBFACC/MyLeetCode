function TreeNode(val) {
  this.val = val
  this.left = this.right = null
}

/**
 * 复习--前序遍历
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root) {
  let res = []
  const dfs = function (node, res) {
    if (!node) {
      res.push('#')
      return
    }
    res.push(node.val)
    dfs(node.left, res)
    dfs(node.right, res)
  }
  dfs(root, res)
  return res.join(',')
}

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
  let list = data.split(',')
  const dfs = function () {
    if (list[0] === '#') {
      list.shift()
      return null
    }
    let root = new TreeNode(list.shift())
    root.left = dfs()
    root.right = dfs()

    return root
  }
  return dfs(root)
}

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */

let a = deserialize('1,2,#,#,3,4,#,#,5,#,#')

return
