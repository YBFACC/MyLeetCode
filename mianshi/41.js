/**
 * 参考--AVL树
 * 重复节点页放在左节点
 * initialize your data structure here.
 */
var MedianFinder = function () {
  this.avl = new AVLTree()
}

/**
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function (num) {
  this.avl.insert(num)
}

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function () {
  const size = this.avl.root.all_size
  if (size % 2 === 1) {
    return this.avl.findIndex((size >> 1) + 1)
  } else {
    let mid_left = this.avl.findIndex(size >> 1)
    let mid_right = this.avl.findIndex((size >> 1) + 1)
    return (mid_left + mid_right) / 2
  }
}

class AVLNode {
  constructor(val) {
    this.val = val
    this.left = null
    this.right = null
    this.height = 1
    this.all_size = 1
    this.left_size = 0
    this.right_size = 0
  }
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
    this._update(node)
    return res
  }
  //LL
  _rightRotate(node) {
    const res = node.left
    ;[res.right, node.left] = [node, res.right]
    this._update(node)
    return res
  }
  //LR
  _leftRightRotate(node) {
    node.left = this._update(this._leftRotate(node.left))
    return this._rightRotate(node)
  }
  //RL
  _rightLeftRotate(node) {
    node.right = this._update(this._rightRotate(node.right))
    return this._leftRotate(node)
  }
  _getHeight(node) {
    return node !== null ? node.height : 0
  }
  _updateHeigh(node) {
    node.height =
      Math.max(this._getHeight(node.left), this._getHeight(node.right)) + 1
  }
  _getSize(node) {
    return node !== null ? node.all_size : 0
  }
  _updateSize(node) {
    node.all_size = this._getSize(node.left) + this._getSize(node.right) + 1
    node.left_size = this._getSize(node.left)
    node.right_size = this._getSize(node.right)
  }
  _update(node) {
    this._updateHeigh(node)
    this._updateSize(node)
    return node
  }
  insert(val) {
    this.root = this._insertNode(this.root, val)
  }
  _insertNode(node, val) {
    if (node === null) return new AVLNode(val)

    if (node.val < val) {
      node.right = this._insertNode(node.right, val)
    } else if (node.val >= val) {
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
        return this._update(this._leftRightRotate(node))
      } else {
        return this._update(this._rightRotate(node))
      }
    } else if (BalanceState === BLANCE_STATE.UNBALANCE_RIGHT) {
      const rightNodeBalanceState = this._getBalanceState(node.right)
      if (rightNodeBalanceState == BLANCE_STATE.SLIGHT_UNBALANCE_LEFT) {
        return this._update(this._rightLeftRotate(node))
      } else {
        return this._update(this._leftRotate(node))
      }
    }
    return this._update(node)
  }
  _getBalanceState(node) {
    return this._getHeight(node.left) - this._getHeight(node.right)
  }
  findIndex(index) {
    let node = this.root
    while (index > 0) {
      if (this._getSize(node.left) < index) {
        if (this._getSize(node.left) === index - 1) {
          break
        }
        index -= this._getSize(node.left) + 1
        node = node.right
      } else {
        node = node.left
      }
    }
    return node.val
  }
}

var obj = new MedianFinder()
obj.addNum(6)
console.log(obj.findMedian())

obj.addNum(10)
console.log(obj.findMedian())

obj.addNum(2)
console.log(obj.findMedian())

obj.addNum(6)
console.log(obj.findMedian())

obj.addNum(5)
console.log(obj.findMedian())

obj.addNum(0)
console.log(obj.findMedian())

obj.addNum(6)
console.log(obj.findMedian())

obj.addNum(3)
console.log(obj.findMedian())

obj.addNum(1)
console.log(obj.findMedian())

obj.addNum(0)
console.log(obj.findMedian())

obj.addNum(0)
console.log(obj.findMedian())
