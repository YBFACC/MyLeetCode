class LinkNode {
  pre: undefined | LinkNode
  next: undefined | LinkNode
  value: number
  constructor(value: number) {
    this.value = value
  }
}

class MyCircularDeque {
  target: LinkNode
  limit: number
  currentNum: number = 0
  constructor(k: number) {
    this.limit = k
    this.target = new LinkNode(-1)
    this.target.pre = this.target
    this.target.next = this.target
  }

  insertFront(value: number): boolean {
    if (this.currentNum >= this.limit) return false
    this.currentNum++;
    const temp = new LinkNode(value)
    const oldStart = this.target.next as LinkNode
    temp.next = oldStart
    oldStart.pre = temp

    this.target.next = temp
    temp.pre = this.target
    return true
  }

  insertLast(value: number): boolean {
    if (this.currentNum >= this.limit) return false
    this.currentNum++;
    const temp = new LinkNode(value)
    const oldEnd = this.target.pre as LinkNode
    oldEnd.next = temp
    temp.pre = oldEnd

    this.target.pre = temp
    temp.next = this.target
    return true
  }

  deleteFront(): boolean {
    if (this.target.next === this.target) return false

    const willDelete = this.target.next as LinkNode
    const newStart = willDelete.next as LinkNode

    this.target.next = newStart
    newStart.pre = this.target

    this.currentNum--
    return true
  }

  deleteLast(): boolean {
    if (this.target.next === this.target) return false
    const willDelete = this.target.pre as LinkNode
    const newEnd = willDelete.pre as LinkNode

    newEnd.next = this.target
    this.target.pre = newEnd

    this.currentNum--
    return true
  }

  getFront(): number {
    return this.target.next?.value ?? -1
  }

  getRear(): number {
    return this.target.pre?.value ?? -1
  }

  isEmpty(): boolean {
    return this.currentNum === 0
  }

  isFull(): boolean {
    return this.currentNum === this.limit
  }
}
