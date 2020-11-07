import { TreeNode, ListNode, runScript } from 'leetcode-class';

//提示--后序--先求出所有值的和，找到一半值的树

function checkEqualTree(root: TreeNode | null): boolean {
  let res = false
  //求所有和
  const dfs = function (node: TreeNode | null): number {
    if (!node) return 0
    let left = dfs(node.left)
    let right = dfs(node.right)

    return node.val + left + right
  }
  let all = dfs(root)
  if ((all & 1) === 1) return false
  const half = all / 2

  //后序判断是否等于一半的值
  const check = function (node: TreeNode | null): number {
    if (!node) return 0
    let left = check(node.left)
    let right = check(node.right)
    if (node !== root) {
      if (node.val + left + right === half) {
        res = true
      }
    }
    return node.val + right + left
  }
  check(root)

  return res
};

checkEqualTree(TreeNode.create([1, 2, 3, 4, 2]))

checkEqualTree(TreeNode.create([0, -1, 1]))

checkEqualTree(TreeNode.create([-2, -2, -2]))

checkEqualTree(TreeNode.create([1, 1]))