const { ListNode } = require('../LeetCode-Class/index.js')

/*
 * @lc app=leetcode.cn id=138 lang=javascript
 *
 * [138] 复制带随机指针的链表
 */

// @lc code=start

/**
 * 参考--原地插入新节点
 * 同剑指offer-35题
 * 1.将拷贝节点放到原节点后面，例如1->2->3这样的链表就变成了这样1->1'->2->2'->3->3'
 * 2.把拷贝节点的random指针安排上
 * 3.分离拷贝节点和原节点，变成1->2->3和1'->2'->3'两个链表，后者就是答案
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function (head) {
  if (!head) return null
  let _head = head
  while (_head) {
    let newnode = new Node(_head.val)
    ;[_head.next, newnode.next, _head] = [newnode, _head.next, _head.next]
  }
  _head = head
  while (_head) {
    let random = _head.random
    let newnode = _head.next
    if (random) {
      newnode.random = random.next
    }
    ;[_head] = [_head.next.next]
  }
  let temphead = new Node()
  let _temp = temphead
  _head = head
  while (_head) {
    _temp.next = _head.next
    _head.next = _head.next.next
    _temp.next.next = null
    ;[_temp, _head] = [_temp.next, _head.next]
  }
  return temphead.next
}
// @lc code=end

function Node(val, next, random) {
  this.val = val
  this.next = next
  this.random = random
}

let a1 = ListNode.create([7, 13, 11, 10, 1])
copyRandomList(a1)
