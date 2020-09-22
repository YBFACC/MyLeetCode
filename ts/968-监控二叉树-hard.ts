/*
 * @lc app=leetcode.cn id=968 lang=typescript
 *
 * [968] 监控二叉树
 */
import { TreeNode, ListNode, runScript } from 'leetcode-class';
// @lc code=start
//参考--树形dp--返回3个量
function minCameraCover(root: TreeNode | null): number {
  if (!root) return 0
  const minRoot = minCam(root)
  return Math.min(minRoot.withCam,minRoot.Son_Watch)
};

interface res_obj {
  withCam: number
  Dad_Watch: number
  Son_Watch: number
}

function minCam(node: TreeNode | null): res_obj {
  if (!node) {
    return {
      withCam: Infinity,
      Dad_Watch: 0,
      Son_Watch: 0
    }
  }
  const left = minCam(node.left)
  const right = minCam(node.right)

  const withCam = 1 + Math.min(
    left.Dad_Watch + right.Dad_Watch,
    left.withCam + right.Dad_Watch,
    left.Dad_Watch + right.withCam
  )
  const Dad_Watch = Math.min(
    left.withCam + right.withCam,
    left.withCam + right.Son_Watch,
    left.Son_Watch + right.withCam,
    left.Son_Watch + right.Son_Watch
  )
  const Son_Watch = Math.min(
    left.withCam + right.withCam,
    left.Son_Watch + right.withCam,
    left.withCam + right.Son_Watch
  )
  return { withCam, Dad_Watch, Son_Watch }
}
// @lc code=end
console.log(
  minCameraCover(TreeNode.create([0, 0, null, 0, null, 0, null, null, 0])))