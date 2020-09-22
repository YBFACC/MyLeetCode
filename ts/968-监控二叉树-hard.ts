/*
 * @lc app=leetcode.cn id=968 lang=typescript
 *
 * [968] 监控二叉树
 */
import { TreeNode, ListNode, runScript } from 'leetcode-class';
// @lc code=start
//参考--递归解
function minCameraCover(root: TreeNode | null): number {
  if (!root) return 0

  return Math.min(minCam(root, true, true), minCam(root, false, false))
};

function minCam(node: TreeNode | null, placeCam: boolean, watched: boolean): number {
  if (!node) {
    if (placeCam) return Infinity
    else return 0
  }
  if (placeCam) {
    return 1 + Math.min(
      minCam(node.left, false, true) + minCam(node.right, false, true),
      minCam(node.left, true, true) + minCam(node.right, false, true),
      minCam(node.left, false, true) + minCam(node.right, true, true)
    )
  } else {
    if (watched) {
      return Math.min(
        minCam(node.left, true, true) + minCam(node.right, true, true),
        minCam(node.left, true, true) + minCam(node.right, false, false),
        minCam(node.left, false, false) + minCam(node.right, true, true),
        minCam(node.left, false, false) + minCam(node.right, false, false),
      )
    } else {
      return Math.min(
        minCam(node.left, true, true) + minCam(node.right, true, true),
        minCam(node.left, true, true) + minCam(node.right, false, false),
        minCam(node.left, false, false) + minCam(node.right, true, true),
      )
    }
  }
}
// @lc code=end
console.log(
  minCameraCover(TreeNode.create([0, 0, null, 0, null, 0, null, null, 0])))