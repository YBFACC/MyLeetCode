import { AVLTree, Heap, TreeNode, ListNode, RunScript, Node, SegmentTree, Trie, NumberOfTrailingZeros, LinkedEdge } from 'lc-tool';

/**
 * 自己－－后序，统计长度
 * @param root 
 * @returns 
 */
function longestUnivaluePath(root: TreeNode | null): number {
  let res = 0

  //[node.val, number]
  const dfs = function (node: TreeNode | null): number[] {
    if (!node) return [-100000, 0]
    const value = node.val
    const left = dfs(node.left)
    const right = dfs(node.right)

    if (left[0] === right[0] && left[0] === value) {
      const temp = [value, Math.max(left[1], right[1])]
      res = Math.max(res, left[1] + right[1] + 2)
      temp[1]++
      return temp
    }
    if (left[0] === value) {
      left[1]++
      res = Math.max(res, left[1])
      return left
    }
    if (right[0] === value) {
      right[1]++
      res = Math.max(res, right[1])
      return right
    }

    return [value, 0]
  }
  dfs(root)

  return res
};

longestUnivaluePath(TreeNode.create([4, -7, -3, null, null, -9, -3, 9, -7, -4, null, 6, null, -6, -6, null, null, 0, 6, 5, null, 9, null, null, -1, -4, null, null, null, -2]))