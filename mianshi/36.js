const { TreeNode } = require('../LeetCode-Class/index.js')

function Node(val, left, right) {
  this.val = val
  this.left = left
  this.right = right
}

/**
 * 自己--中序遍历--链表操作
 * @param {Node} root
 * @return {Node}
 */
var treeToDoublyList = function (root) {
  if (!root) return null
  let head = new Node()
  let _head = head
  const dfs = function (node) {
    if (!node) return
    dfs(node.left)
    _head.right = node
    ;[_head] = [_head.right]
    dfs(node.right)
  }
  dfs(root)

  _head = head.right
  let last
  while (_head) {
    if (_head.right) {
      let next = _head.right
      next.left = _head
    } else {
      last = _head
    }
    ;[_head] = [_head.right]
  }

  last.right = head.right

  head.right.left = last

  return head.right
}

let a1 = TreeNode.create([4, 2, 5, 1, 3])

treeToDoublyList(a1)
