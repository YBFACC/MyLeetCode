/*
 * @lc app=leetcode.cn id=1261 lang=typescript
 *
 * [1261] 在受污染的二叉树中查找元素
 */
import { TreeNode } from "leetcode-class";
// @lc code=start
//自己--easy
class FindElements {
  root: TreeNode | null
  constructor(root: TreeNode | null) {
    this.root = root
    if (!root) return
    root.val = 0
    root.left && this.dfs(root.left, 0, true)
    root.right && this.dfs(root.right, 0, false)
  }

  find(target: number): boolean {
    return this._find(this.root, target)
  }
  _find(node: TreeNode | null, target: number): boolean {
    if (!node) return false
    return node.val === target || this._find(node.left, target) || this._find(node.right, target)
  }
  dfs(node: TreeNode | null, laster: number, exchange: boolean) {
    if (!node) return
    let x
    if (exchange) {
      x = laster * 2 + 1
    } else {
      x = laster * 2 + 2
    }
    node.val = x
    node.left && this.dfs(node.left, x, true)
    node.right && this.dfs(node.right, x, false)
  }
}

// @lc code=end

var obj = new FindElements(TreeNode.create([1, 2, 3, null, 4, null, null, 5, 6]))
var param_1 = obj.find(5)

