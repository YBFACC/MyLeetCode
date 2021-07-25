import { AVLTree, Heap, TreeNode, ListNode, RunScript, Node, SegmentTree } from 'lc-tool';

//自己--树状数组

class NumArray {
  list: number[]
  Len: number
  nums: number[]
  constructor(nums: number[]) {
    this.nums = nums
    this.Len = nums.length
    this.list = Array.from({ length: this.Len + 1 }, () => 0)
    for (let i = 0; i < this.Len; i++) {
      //初始化，不需要删减。不是更新，要删去原值，加上新值
      let index = i + 1
      while (index <= this.Len) {
        this.list[index] += nums[i]
        index += this.lowbit(index)
      }
    }
  }

  update(index: number, val: number): void {
    //nums用来存储当前i项的值，方便更新
    //更新时，减去原值，加上新值
    const temp = this.nums[index]
    this.nums[index] = val
    index++
    while (index <= this.Len) {
      this.list[index] += val - temp
      index += this.lowbit(index)
    }
  }

  sumRange(left: number, right: number): number {
    return this.query(right) - this.query(left - 1)
  }
  lowbit(x: number) {
    return x & (-x)
  }
  query(x: number) {
    x++
    let preSum = 0
    while (x > 0) {
      preSum += this.list[x]
      x -= this.lowbit(x)
    }
    return preSum
  }
}

RunScript(["NumArray", "sumRange", "update", "sumRange"]
  , [[[1, 3, 5]], [0, 2], [1, 2], [0, 2]],
  NumArray
)