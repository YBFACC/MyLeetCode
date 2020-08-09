/*
 * @lc app=leetcode.cn id=133 lang=javascript
 *
 * [133] 克隆图
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * 参考--DFS--注意去重
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function (node) {
  if (!node) return null
  const map = new Map()

  const dfs = function (node) {
    if (!map.has(node.val)) {
      var curr = new Node(node.val)
      map.set(node.val, curr)
    } else {
      return map.get(node.val)
    }

    for (const item of node.neighbors) {
      curr.neighbors.push(dfs(item))
    }

    return curr
  }
  return dfs(node)
}
// @lc code=end
