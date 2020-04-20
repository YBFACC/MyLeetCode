/*
 * @lc app=leetcode.cn id=116 lang=javascript
 *
 * [116] 填充每个节点的下一个右侧节点指针
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * 参考--递归-父节点处理,不使用队列--性能好
 * @param {Node} root
 * @return {Node}
 */
var connect = function (root) {
  if (!root) return null

  if (root.left) {
    root.left.next = root.right
  }
  if (root.right && root.next) {
    root.right.next = root.next.left
  }

  connect(root.left)
  connect(root.right)
  return root
}
// @lc code=end
