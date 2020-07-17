/*
 * @lc app=leetcode.cn id=1382 lang=javascript
 *
 * [1382] 将二叉搜索树变平衡
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 自己--可以手撕AVL树
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var balanceBST = function (root) {
  let bbst = new AVLTree()

  const pre = function (node) {
    if (!node) return
    pre(node.left)
    bbst.insert(node.val)
    pre(node.right)
  }

  pre(root)
  return bbst.root
}

class AVLNode {
  constructor(val) {
    this.val = val
    this.left = null
    this.right = null
    this.height = 1
  }
  getKey() {}
}
const BLANCE_STATE = {
  UNBALANCE_LEFT: 2,
  UNBALANCE_RIGHT: -2,
  SLIGHT_UNBALANCE_LEFT: 1,
  SLIGHT_UNBALANCE_RIGHT: -1,
  BALANCE: 0
}
class AVLTree {
  constructor() {
    this.root = null
  }
  //RR
  _leftRotate(node) {
    const res = node.right
    ;[res.left, node.right] = [node, res.left]
    this._updateHeigh(node)
    return res
  }
  //LL
  _rightRotate(node) {
    const res = node.left
    ;[res.right, node.left] = [node, res.right]
    this._updateHeigh(node)
    return res
  }

  //LR
  _leftRightRotate(node) {
    node.left = this._updateHeigh(this._leftRotate(node.left))
    return this._rightRotate(node)
  }
  //RL
  _rightLeftRotate(node) {
    node.right = this._updateHeigh(this._rightRotate(node.right))
    return this._leftRotate(node)
  }
  _getHeight(node) {
    return node !== null ? node.height : 0
  }
  _updateHeigh(node) {
    node.height =
      Math.max(this._getHeight(node.left), this._getHeight(node.right)) + 1
    return node
  }
  insert(val) {
    this.root = this._insertNode(this.root, val)
  }
  _insertNode(node, val) {
    if (node === null) return new AVLNode(val)
    if (node.val === val) return node
    if (node.val < val) {
      node.right = this._insertNode(node.right, val)
    } else if (node.val > val) {
      node.left = this._insertNode(node.left, val)
    }
    return this._toBalance(node)
  }
  _toBalance(node) {
    if (node === null) return null
    const BalanceState = this._getBalanceState(node)

    if (BalanceState === BLANCE_STATE.UNBALANCE_LEFT) {
      const leftNodeBalanceState = this._getBalanceState(node.left)
      if (leftNodeBalanceState == BLANCE_STATE.SLIGHT_UNBALANCE_RIGHT) {
        return this._updateHeigh(this._leftRightRotate(node))
      } else {
        return this._updateHeigh(this._rightRotate(node))
      }
    } else if (BalanceState === BLANCE_STATE.UNBALANCE_RIGHT) {
      const rightNodeBalanceState = this._getBalanceState(node.right)
      if (rightNodeBalanceState == BLANCE_STATE.SLIGHT_UNBALANCE_LEFT) {
        return this._updateHeigh(this._rightLeftRotate(node))
      } else {
        return this._updateHeigh(this._leftRotate(node))
      }
    }
    return this._updateHeigh(node)
  }
  _getBalanceState(node) {
    return this._getHeight(node.left) - this._getHeight(node.right)
  }
}
// @lc code=end
