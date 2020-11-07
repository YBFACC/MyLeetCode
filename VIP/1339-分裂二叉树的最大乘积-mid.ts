import { TreeNode, ListNode, runScript } from 'leetcode-class';

//自己-类似663题--a+b的值是定值时，Math.abs(a-b)越小，乘积越大
//先求树的总值，后序求出当前树的值
//总值-当前=另一颗树的zhi

function maxProduct(root: TreeNode | null): number {

  const dfs = function (node: TreeNode | null): number {
    if (!node) return 0
    let left = dfs(node.left)
    let right = dfs(node.right)
    return node.val + left + right
  }
  let all = dfs(root)

  let abs = Infinity
  let a!: number
  let b!: number

  const check = function (node: TreeNode | null): number {
    if (!node) return 0
    let left = check(node.left)
    let right = check(node.right)
    if (node !== root) {
      let curr = node.val + left + right//a树
      let orther = all - curr//b树
      if (Math.abs(curr - orther) === abs &&
        (
          (a * b % 1000000007) <
          (curr * orther % 1000000007)
        )) {
        a = curr
        b = orther
      }
      if (Math.abs(curr - orther) < abs) {
        a = curr
        b = orther
        abs = Math.abs(curr - orther)
      }
    }
    return node.val + right + left
  }
  check(root)

  return a * b % 1000000007
};
console.log(maxProduct(TreeNode.create([1, 2, 3, 4, 5, 6])))