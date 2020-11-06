/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */
import { TreeNode, ListNode, runScript } from 'leetcode-class';

//提示--逻辑复杂的一笔

function findClosestLeaf(root: TreeNode | null, k: number): number {
  if (!root) return 0
  if (root.val === k && !root.left && !root.right) return 1
  let k_down: number[] = [Infinity, -1]
  //[子长度，node.val]
  //1.求k的叶子节点到k的最短距离
  function dfs(node: TreeNode | null,): number[] {
    if (!node) return [Infinity, -1]
    if (!node.left && !node.right && node.val == k) {
      k_down = [0, k]
      return [0, k]
    }
    if (!node.left && !node.right) {
      return [0, node.val]
    }
    let left = dfs(node.left)
    let right = dfs(node.right)
    let min
    if (left[0] < right[0]) {
      min = [left[0] + 1, left[1]]
    } else {
      min = [right[0] + 1, right[1]]
    }
    if (node.val === k) {
      k_down = min.slice()
    }
    return min
  }
  dfs(root)

  //2.求根节点到k的路径
  function top(node: TreeNode | null): number[] {
    if (!node) return [Infinity, -1]
    if (node.val === k) return [Infinity, -1]
    if (!node.left && !node.right) {
      return [0, node.val]
    }
    let left = top(node.left)
    let right = top(node.right)
    let min
    if (left[0] < right[0]) {
      min = [left[0] + 1, left[1]]
    } else {
      min = [right[0] + 1, right[1]]
    }
    return min
  }

  //3.求k的祖先节点到k到距离和到不是k到叶子节点到距离
  function inOrdor(node: TreeNode | null, temp: TreeNode[]) {
    if (!node) return
    if (node.val === k) {
      root_list = temp.slice()
      return
    }
    temp.push(node)
    inOrdor(node.left, temp)
    inOrdor(node.right, temp)
    temp.pop()
  }
  let root_list: TreeNode[] = []
  inOrdor(root, [])

  let count = 1
  while (root_list.length > 0) {
    const curr = root_list.pop() as TreeNode
    const top_list = top(curr)
    if (count + top_list[0] < k_down[0]) {
      k_down = [count + top_list[0], top_list[1]]
    }

    count++
  }
  return k_down[1]
};

findClosestLeaf(TreeNode.create([1, 2, 3, null, null, 4, 5, 6, null, null, 7, 8, 9, 10]
), 2)
findClosestLeaf(TreeNode.create([1, 2, 3, 4, null, null, 7, 8, 9, null, null, 12, null, null, null, null, 13, null, 14]
), 8)


findClosestLeaf(TreeNode.create([1, 2, 3, null, null, 4, 5, 6, null, null, 7, 8, 9, 10]
), 2)