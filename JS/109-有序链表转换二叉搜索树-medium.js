/*
 * @lc app=leetcode.cn id=109 lang=javascript
 *
 * [109] 有序链表转换二叉搜索树
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 参考--链表转数组+递归--性能好
 * 将给定的链表转成数组并利用数组来构建二叉搜索树。数组找中间元素只-
 * 需要O(1)的时间，所以会降低整个算法的时间复杂度开销。
 * 
 * 中序遍历一棵二叉搜索树的结果是得到一个升序序列。
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function (head) {
  if (!head) return null
  let list = []
  while (head) {
    list.push(head.val)
    head = head.next
  }
  let left = 0
  let right = list.length - 1
  const func = function (left, right) {
    if (left > right) return null
    let mid = Math.trunc((left + right) / 2)
    let root = new TreeNode(list[mid])
    root.left = func(left, mid - 1)
    root.right = func(mid + 1, right)
    return root
  }

  return func(left, right)
}
// @lc code=end
