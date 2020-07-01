/**
 * 自己--map+list-链表操作
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function (head) {
  if (!head) return null

  let tempHead = new Node()
  let map = new Map()
  let list = []

  let _temp = tempHead
  let _head = head
  let index = 0

  while (_head) {
    map.set(_head, index)
    let newNode = new Node(_head.val)
    list.push(newNode)
    _temp.next = newNode
    ;[_temp, _head] = [_temp.next, _head.next]
    index++
  }

  _temp = tempHead.next
  _head = head

  while (_head) {
    let random = _head.random
    if (random && map.has(random)) {
      let num = map.get(random)
      _temp.random = list[num]
    } else {
      _temp.random = null
    }
    ;[_temp, _head] = [_temp.next, _head.next]
  }

  return tempHead.next
}

function Node(val, next, random) {
  this.val = val
  this.next = next
  this.random = random
}

let a0 = new Node(7)
let a1 = new Node(13)
let a2 = new Node(11)
let a3 = new Node(10)
let a4 = new Node(1)

a0.next = a1
a1.next = a2
a2.next = a3
a3.next = a4

a0.random = null
a1.random = a0
a2.random = a4
a3.random = a2
a4.random = a0

console.log(copyRandomList(a0))
